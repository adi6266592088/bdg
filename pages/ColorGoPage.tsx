import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Page } from '../App';
import { ChevronLeftIcon, RefreshIcon, SpeakerIcon, SpeakerXMarkIcon } from '../components/icons';

// --- Helper Functions & Constants ---
const GAME_DURATION = 60; // 60 seconds

// --- Sound Data URIs (Base64 encoded) ---
// Using empty strings as placeholders to avoid breaking the app.
// Replace with actual base64 data URIs for sound effects.
const sounds = {
    bet: '',
    win: '',
    lose: '',
    tick: '',
};

const generatePeriodId = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const period = Math.floor((d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) / GAME_DURATION);
    return `${year}${month}${day}${period.toString().padStart(4, '0')}`;
};

const getResultForNumber = (num: number) => {
    const result: { number: number; colors: string[]; size: string } = {
        number: num,
        colors: [],
        size: num >= 5 ? 'Big' : 'Small'
    };
    if ([1, 3, 7, 9].includes(num)) result.colors.push('Green');
    if ([2, 4, 6, 8].includes(num)) result.colors.push('Red');
    if (num === 0) result.colors.push('Red', 'Violet');
    if (num === 5) result.colors.push('Green', 'Violet');
    return result;
};

const generateInitialHistory = () => {
    return Array.from({ length: 10 }, (_, i) => {
        return { period: `...${9 - i}`, ...getResultForNumber(Math.floor(Math.random() * 10)) };
    });
};

// --- Main Component ---
const ColorGoPage: React.FC<{ onNavigate: (page: Page) => void; }> = ({ onNavigate }) => {
    const [balance, setBalance] = useState(1000.66);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [currentPeriod, setCurrentPeriod] = useState(generatePeriodId());
    const [history, setHistory] = useState(generateInitialHistory());
    const [myBets, setMyBets] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState('history');
    const [isMuted, setIsMuted] = useState(false);

    const [modal, setModal] = useState({ isOpen: false, betType: '', betValue: '' });
    const [betAmount, setBetAmount] = useState(10);
    const [multiplier, setMultiplier] = useState(1);

    const [modalAutoRebetEnabled, setModalAutoRebetEnabled] = useState(false);
    const [modalRebetLimit, setModalRebetLimit] = useState(1);

    const [autoRebet, setAutoRebet] = useState<{
        enabled: boolean;
        limit: number;
        count: number;
        lastBet: { type: string; value: string; amount: number } | null;
    }>({ enabled: false, limit: 1, count: 0, lastBet: null });

    const audioRefs = {
        bet: useRef<HTMLAudioElement>(null),
        win: useRef<HTMLAudioElement>(null),
        lose: useRef<HTMLAudioElement>(null),
        tick: useRef<HTMLAudioElement>(null),
    };
    
    const playSound = (sound: keyof typeof sounds) => {
        if (isMuted) return;
        const audio = audioRefs[sound].current;
        if (audio && audio.src) {
            audio.currentTime = 0;
            audio.play().catch(e => console.error("Audio play failed:", e));
        }
    };

    const handleNewRound = useCallback(() => {
        const winningNumber = Math.floor(Math.random() * 10);
        const result = getResultForNumber(winningNumber);
        const periodId = currentPeriod;

        setHistory(prev => [{ period: periodId, ...result }, ...prev].slice(0, 20));

        const betsForPeriod = myBets.filter(b => b.period === periodId && b.status === 'Pending');
        let winnings = 0;
        const updatedBets = myBets.map(bet => {
            if (bet.period === periodId && bet.status === 'Pending') {
                let win = false;
                let payoutRate = 0;
                
                if (bet.type === 'color' && result.colors.includes(bet.value)) {
                    if (result.colors.includes('Violet')) {
                         payoutRate = 1.5;
                    } else {
                         payoutRate = 2;
                    }
                    win = true;
                }
                if (bet.type === 'color' && bet.value === "Violet" && result.colors.includes("Violet")) {
                    payoutRate = 4.5;
                    win = true;
                }
                if (bet.type === 'number' && result.number === parseInt(bet.value)) {
                    payoutRate = 9;
                    win = true;
                }
                if (bet.type === 'size' && result.size === bet.value) {
                    payoutRate = 2;
                    win = true;
                }

                if (win) {
                    const winAmount = bet.amount * payoutRate;
                    winnings += winAmount;
                    return { ...bet, status: 'Win', winAmount };
                }
                return { ...bet, status: 'Lose' };
            }
            return bet;
        });
        
        setMyBets(updatedBets);
        if (winnings > 0) {
            setBalance(prev => prev + winnings);
        }

        if (betsForPeriod.length > 0) {
            if (winnings > 0) {
                playSound('win');
            } else {
                playSound('lose');
            }
        }

        setCurrentPeriod(generatePeriodId());
        setTimeLeft(GAME_DURATION);
    }, [currentPeriod, myBets]);

    useEffect(() => {
        if (timeLeft > 0 && timeLeft <= 5) {
            playSound('tick');
        }
        if (timeLeft === 0) {
            handleNewRound();
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, handleNewRound]);
    
    useEffect(() => {
        if (history[0].period.startsWith('...')) return;

        const { enabled, limit, count, lastBet } = autoRebet;
        const canRebet = enabled && lastBet && (limit === Infinity || count < limit) && balance >= lastBet.amount && timeLeft > 5;

        if (canRebet) {
            setBalance(prev => prev - lastBet!.amount);
            setMyBets(prev => [{
                period: currentPeriod,
                type: lastBet!.type,
                value: lastBet!.value,
                amount: lastBet!.amount,
                status: 'Pending',
            }, ...prev]);
            setAutoRebet(prev => ({ ...prev, count: prev.count + 1 }));
        } else if (enabled) {
            setAutoRebet({ enabled: false, limit: 1, count: 0, lastBet: null });
        }
    }, [currentPeriod, balance, timeLeft, autoRebet, history]);

    const openModal = (betType: string, betValue: string) => {
        if (timeLeft < 5) {
            alert("Betting is closed for this round.");
            return;
        }
        setModal({ isOpen: true, betType, betValue });
        setBetAmount(10);
        setMultiplier(1);
        setModalAutoRebetEnabled(false);
        setModalRebetLimit(1);
    };

    const handlePlaceBet = () => {
        const totalBet = betAmount * multiplier;
        if (balance < totalBet) {
            alert("Insufficient balance.");
            return;
        }
        
        playSound('bet');
        setBalance(prev => prev - totalBet);
        setMyBets(prev => [{
            period: currentPeriod,
            type: modal.betType,
            value: modal.betValue,
            amount: totalBet,
            status: 'Pending',
        }, ...prev]);

        if (modalAutoRebetEnabled) {
            setAutoRebet({
                enabled: true,
                limit: modalRebetLimit,
                count: 0,
                lastBet: { type: modal.betType, value: modal.betValue, amount: totalBet },
            });
        } else {
            setAutoRebet({ enabled: false, limit: 1, count: 0, lastBet: null });
        }

        setModal({ isOpen: false, betType: '', betValue: '' });
    };

    const isBettingDisabled = timeLeft < 5;
    const timeDisplay = `00:${timeLeft.toString().padStart(2, '0')}`;
    const memoizedMyBets = useMemo(() => myBets.slice(0, 50), [myBets]);

    return (
        <div className="min-h-screen bg-[#373542] text-white pb-4 font-sans">
            {/* Audio elements */}
            {Object.entries(sounds).map(([key, src]) => (
                <audio key={key} ref={audioRefs[key as keyof typeof sounds]} src={src} preload="auto" />
            ))}

            <header className="p-3 flex items-center bg-slate-800 sticky top-0 z-20">
                <button onClick={() => onNavigate('main')} aria-label="Go back">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-center flex-grow">Color Go</h1>
                <button onClick={() => setIsMuted(!isMuted)} aria-label="Toggle sound">
                  {isMuted ? <SpeakerXMarkIcon className="w-6 h-6" /> : <SpeakerIcon className="w-6 h-6" />}
                </button>
            </header>

            <main className="p-3 space-y-4">
                <div className="bg-slate-800 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-400">Balance</p>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">₹{balance.toFixed(2)}</span>
                                <RefreshIcon className="w-5 h-5 ml-2 text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="text-xs text-gray-400">Period: {currentPeriod}</p>
                             <p className="text-2xl font-bold text-yellow-400">{timeDisplay}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-3 space-y-4">
                     <div className="flex justify-around">
                        <BetButton label="Green" onClick={() => openModal('color', 'Green')} className="bg-gradient-to-br from-green-500 to-emerald-600" disabled={isBettingDisabled}/>
                        <BetButton label="Violet" onClick={() => openModal('color', 'Violet')} className="bg-gradient-to-br from-purple-500 to-indigo-600" disabled={isBettingDisabled}/>
                        <BetButton label="Red" onClick={() => openModal('color', 'Red')} className="bg-gradient-to-br from-red-500 to-rose-600" disabled={isBettingDisabled}/>
                     </div>
                     <div className="grid grid-cols-5 gap-2">
                        {[0,1,2,3,4,5,6,7,8,9].map(num => (
                            <NumberButton key={num} num={num} onClick={() => openModal('number', String(num))} disabled={isBettingDisabled}/>
                        ))}
                     </div>
                     <div className="flex justify-around">
                        <BetButton label="Big" onClick={() => openModal('size', 'Big')} className="bg-gradient-to-br from-sky-400 to-blue-500 w-32" disabled={isBettingDisabled}/>
                        <BetButton label="Small" onClick={() => openModal('size', 'Small')} className="bg-gradient-to-br from-amber-400 to-orange-500 w-32" disabled={isBettingDisabled}/>
                     </div>
                </div>

                <div className="bg-slate-800 rounded-lg">
                    <div className="flex border-b border-slate-700">
                        <TabButton label="Game History" isActive={activeTab === 'history'} onClick={() => setActiveTab('history')}/>
                        <TabButton label="My Bets" isActive={activeTab === 'my-bets'} onClick={() => setActiveTab('my-bets')}/>
                    </div>
                    <div className="p-2 max-h-60 overflow-y-auto">
                        {activeTab === 'history' ? (
                            <HistoryTable history={history} />
                        ) : (
                            <MyBetsTable bets={memoizedMyBets} />
                        )}
                    </div>
                </div>
            </main>

            {modal.isOpen && (
                <div className="fixed inset-0 bg-black/60 z-30 flex items-center justify-center p-4">
                    <div className="bg-slate-700 rounded-lg p-4 w-full max-w-sm text-white animate-fade-in-up">
                        <h2 className="text-lg font-bold text-center text-yellow-400 mb-2">
                            Bet on {modal.betValue}
                        </h2>
                        <p className="text-center text-sm text-gray-400 mb-4">Balance: ₹{balance.toFixed(2)}</p>
                        
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Amount</p>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => setBetAmount(a => Math.max(10, a - 10))} className="bg-slate-600 w-10 h-10 text-2xl rounded flex-shrink-0">-</button>
                                <input
                                    type="number"
                                    value={betAmount}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value, 10);
                                        setBetAmount(isNaN(value) || value < 10 ? 10 : value);
                                    }}
                                    className="bg-slate-800 text-center w-full h-10 rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <button onClick={() => setBetAmount(a => a + 10)} className="bg-slate-600 w-10 h-10 text-2xl rounded flex-shrink-0">+</button>
                            </div>
                             <div className="flex space-x-2 mt-2">
                                {[10, 100, 1000, 10000].map(val => (
                                    <button key={val} onClick={() => setBetAmount(val)} className={`flex-1 py-1 rounded text-xs ${betAmount === val ? 'bg-yellow-500 text-black font-bold' : 'bg-slate-600'}`}>{val}</button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm text-gray-300 mb-1">Multiplier (x)</p>
                             <div className="flex items-center space-x-2">
                                <button onClick={() => setMultiplier(m => Math.max(1, m-1))} className="bg-slate-600 w-10 h-10 text-2xl rounded">-</button>
                                <input type="number" readOnly value={multiplier} className="bg-slate-800 text-center w-full h-10 rounded" />
                                <button onClick={() => setMultiplier(m => m+1)} className="bg-slate-600 w-10 h-10 text-2xl rounded">+</button>
                            </div>
                        </div>
                        
                        <p className="text-center my-4 font-bold text-xl">
                            Total Bet: ₹{(betAmount * multiplier).toFixed(2)}
                        </p>

                        <div className="mt-4 border-t border-slate-600 pt-4">
                            <label htmlFor="autoRebet" className="flex items-center space-x-2 cursor-pointer">
                                <input 
                                    id="autoRebet"
                                    type="checkbox"
                                    checked={modalAutoRebetEnabled}
                                    onChange={(e) => setModalAutoRebetEnabled(e.target.checked)}
                                    className="h-5 w-5 rounded bg-slate-800 border-slate-500 text-yellow-500 focus:ring-yellow-500"
                                />
                                <span className="font-semibold text-sm">Auto Re-bet</span>
                            </label>
                            {modalAutoRebetEnabled && (
                                <div className="mt-2 pl-7">
                                    <p className="text-xs text-gray-400 mb-1">Re-bet for next:</p>
                                    <div className="flex space-x-2 text-xs">
                                        {[1, 3, 5, Infinity].map(val => (
                                            <button
                                                key={val}
                                                onClick={() => setModalRebetLimit(val)}
                                                className={`flex-1 py-1 rounded ${modalRebetLimit === val ? 'bg-yellow-500 text-black font-bold' : 'bg-slate-600'}`}
                                            >
                                                {val === Infinity ? '∞ times' : `${val} time${val > 1 ? 's' : ''}`}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="flex space-x-2 mt-4">
                            <button onClick={() => setModal({ isOpen: false, betType: '', betValue: '' })} className="flex-1 py-3 bg-slate-600 rounded-lg font-bold">Cancel</button>
                            <button onClick={handlePlaceBet} className="flex-1 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-bold">Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Sub-components ---
const BetButton: React.FC<{label:string, onClick:()=>void, className?:string, disabled:boolean}> = ({ label, onClick, className, disabled }) => (
    <button onClick={onClick} disabled={disabled} className={`px-6 py-2 rounded-md font-bold text-lg shadow-md transition-transform duration-150 ease-in-out hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
        {label}
    </button>
);

const NumberButton: React.FC<{num:number, onClick:()=>void, disabled:boolean}> = ({ num, onClick, disabled }) => {
    const { colors } = getResultForNumber(num);
    const colorClasses = 
        colors.includes('Green') && colors.includes('Violet') ? 'bg-gradient-to-r from-green-500 to-purple-500' :
        colors.includes('Red') && colors.includes('Violet') ? 'bg-gradient-to-r from-red-500 to-purple-500' :
        colors.includes('Green') ? 'bg-green-500' :
        colors.includes('Red') ? 'bg-red-500' : 'bg-slate-600';
    
    return (
        <button onClick={onClick} disabled={disabled} className={`h-12 w-full rounded-md font-bold text-xl shadow-md flex items-center justify-center transition-transform duration-150 ease-in-out hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses}`}>
            {num}
        </button>
    );
};

const TabButton: React.FC<{label:string, isActive:boolean, onClick:()=>void}> = ({ label, isActive, onClick }) => (
    <button onClick={onClick} className={`flex-1 py-3 text-center font-semibold ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}>
        {label}
    </button>
);

const HistoryTable: React.FC<{history: any[]}> = ({ history }) => (
    <table className="w-full text-sm text-center">
        <thead>
            <tr className="text-gray-400">
                <th className="py-2">Period</th>
                <th className="py-2">Number</th>
                <th className="py-2">Result</th>
            </tr>
        </thead>
        <tbody>
            {history.map((item, index) => (
                <tr key={index} className="border-t border-slate-700">
                    <td className="py-2">{item.period}</td>
                    <td className="py-2 font-bold">{item.number}</td>
                    <td className="py-2 flex justify-center items-center space-x-1">
                        <span className={`font-bold ${item.size === 'Big' ? 'text-sky-400' : 'text-amber-400'}`}>{item.size}</span>
                        {item.colors.map((color: string, cIndex: number) => (
                            <span key={cIndex} className={`w-3 h-3 rounded-full ${color === 'Green' ? 'bg-green-500' : color === 'Red' ? 'bg-red-500' : 'bg-purple-500'}`}></span>
                        ))}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const MyBetsTable: React.FC<{bets: any[]}> = ({ bets }) => {
    if (bets.length === 0) {
        return <p className="text-center text-gray-500 py-8">No bets placed yet.</p>
    }
    return (
        <table className="w-full text-sm text-left">
            <thead>
                <tr className="text-gray-400">
                    <th className="py-2 px-1">Period</th>
                    <th className="py-2 px-1">Bet</th>
                    <th className="py-2 px-1 text-right">Amount</th>
                    <th className="py-2 px-1 text-right">Result</th>
                </tr>
            </thead>
            <tbody>
                {bets.map((bet, index) => (
                    <tr key={index} className="border-t border-slate-700">
                        <td className="py-2 px-1">{bet.period}</td>
                        <td className="py-2 px-1 font-semibold">{bet.value}</td>
                        <td className="py-2 px-1 text-right">₹{bet.amount.toFixed(2)}</td>
                        <td className={`py-2 px-1 text-right font-bold ${bet.status === 'Win' ? 'text-green-400' : bet.status === 'Lose' ? 'text-red-500' : 'text-gray-400'}`}>
                           {bet.status === 'Win' ? `+₹${bet.winAmount.toFixed(2)}` : bet.status}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ColorGoPage;