import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Page } from '../App';
import { ChevronLeftIcon, PlaneIcon } from '../components/icons';

type GameState = 'waiting' | 'betting' | 'flying' | 'crashed';

// --- Sound Data URIs (Base64 encoded) ---
const sounds = {
    takeoff: '',
    cashout: '',
    crash: '',
    win: '',
    lose: '',
};

// A more realistic, non-linear curve for the multiplier
const calculateMultiplier = (startTime: number) => {
    const elapsed = (Date.now() - startTime) / 1000;
    return Math.pow(1.05, elapsed) + 0.01 * elapsed;
};


const AviatorPage: React.FC<{ onNavigate: (page: Page) => void; }> = ({ onNavigate }) => {
    const [gameState, setGameState] = useState<GameState>('waiting');
    const [multiplier, setMultiplier] = useState(1.00);
    const [balance, setBalance] = useState(1000.66);
    const [betAmount, setBetAmount] = useState(10);
    const [autoBet, setAutoBet] = useState(false);
    const [hasPlacedBet, setHasPlacedBet] = useState(false);
    const [hasCashedOut, setHasCashedOut] = useState(false);
    const [history, setHistory] = useState<number[]>(() => Array.from({ length: 10 }, () => 1 + Math.random() * 5));
    const [toast, setToast] = useState<{ show: boolean, message: string, type: 'win' | 'lose' } | null>(null);

    // Fix: Initialize useRef with an argument (null) to avoid errors.
    const animationFrameRef = useRef<number | null>(null);
    const roundStartTimeRef = useRef<number>(0);
    const crashMultiplierRef = useRef<number>(0);
    // Fix: Use `number` for setTimeout's return type in browser environments, not NodeJS.Timeout, and initialize useRef with null. This resolves two errors.
    const timeoutRef = useRef<number | null>(null);

    const audioRefs = {
        takeoff: useRef<HTMLAudioElement>(null),
        cashout: useRef<HTMLAudioElement>(null),
        crash: useRef<HTMLAudioElement>(null),
        win: useRef<HTMLAudioElement>(null),
        lose: useRef<HTMLAudioElement>(null),
    };
    
    const playSound = (sound: keyof typeof sounds) => {
        const audio = audioRefs[sound].current;
        if (audio && audio.src) {
            audio.currentTime = 0;
            audio.play().catch(e => console.error("Audio play failed:", e));
        }
    };
    
    const showToast = (message: string, type: 'win' | 'lose') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const gameLoop = useCallback(() => {
        const newMultiplier = calculateMultiplier(roundStartTimeRef.current);
        if (newMultiplier >= crashMultiplierRef.current) {
            setGameState('crashed');
        } else {
            setMultiplier(newMultiplier);
            animationFrameRef.current = requestAnimationFrame(gameLoop);
        }
    }, []);

    const startNewRound = useCallback(() => {
        setHasPlacedBet(false);
        setHasCashedOut(false);
        setMultiplier(1.00);
        setGameState('betting');

        if (autoBet) {
            handlePlaceBet();
        }

        timeoutRef.current = window.setTimeout(() => {
            playSound('takeoff');
            crashMultiplierRef.current = Math.max(1.01, Math.random() * 10 + 1); // Ensure it's at least 1.01
            roundStartTimeRef.current = Date.now();
            setGameState('flying');
        }, 5000); // 5 seconds betting time
    }, [autoBet, betAmount]);

    useEffect(() => {
        if (gameState === 'flying') {
            animationFrameRef.current = requestAnimationFrame(gameLoop);
        } else if (gameState === 'crashed') {
            playSound('crash');
            if (hasPlacedBet && !hasCashedOut) {
                showToast(`You Lost ₹${betAmount.toFixed(2)}`, 'lose');
                playSound('lose');
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            setHistory(prev => [crashMultiplierRef.current, ...prev].slice(0, 20));
            setGameState('waiting');
        } else if (gameState === 'waiting') {
            timeoutRef.current = window.setTimeout(startNewRound, 5000); // 5 seconds wait before next round
        }

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        };
    }, [gameState, gameLoop, startNewRound]);
    
    const handlePlaceBet = () => {
        if (balance >= betAmount && !hasPlacedBet) {
            setBalance(prev => prev - betAmount);
            setHasPlacedBet(true);
        } else if (hasPlacedBet) {
            // Cancel bet
            setBalance(prev => prev + betAmount);
            setHasPlacedBet(false);
        }
    };

    const handleCashOut = () => {
        if (hasPlacedBet && !hasCashedOut && gameState === 'flying') {
            const winnings = betAmount * multiplier;
            setBalance(prev => prev + winnings);
            setHasCashedOut(true);
            showToast(`You Won ₹${winnings.toFixed(2)}`, 'win');
            playSound('cashout');
            playSound('win');
        }
    };
    
    const planePosition = useMemo(() => {
        if (gameState !== 'flying') return { bottom: '5%', left: '50%', transform: 'translate(-50%, 0) rotate(-45deg)' };
        
        const progress = Math.min((multiplier - 1) / (crashMultiplierRef.current > 0 ? crashMultiplierRef.current - 1 : 10), 1);
        const bottom = 5 + progress * 80;
        const left = 50 + Math.sin(progress * Math.PI) * 20;

        return { bottom: `${bottom}%`, left: `${left}%`, transform: `translate(-50%, 0) rotate(${ -45 + progress * 25 }deg)` };
    }, [gameState, multiplier]);

    const multiplierColor = useMemo(() => {
        if (multiplier < 2) return 'text-white';
        if (multiplier < 5) return 'text-yellow-300';
        return 'text-orange-400';
    }, [multiplier]);

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
            {/* Audio elements */}
            {Object.entries(sounds).map(([key, src]) => (
                <audio key={key} ref={audioRefs[key as keyof typeof sounds]} src={src} preload="auto" />
            ))}

            <header className="p-3 flex items-center bg-slate-800/50 sticky top-0 z-20">
                <button onClick={() => onNavigate('main')} aria-label="Go back">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-center flex-grow">Aviator</h1>
                <div className="w-6"></div>
            </header>

            <div className="p-2">
                <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                    {history.map((m, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-sm font-semibold whitespace-nowrap ${m < 2 ? 'text-red-400' : 'text-green-400'}`}>
                            {m.toFixed(2)}x
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-black/20">
                {/* Game Display */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                {gameState === 'flying' && (
                    <div className="absolute w-full h-full">
                        <div style={planePosition} className="absolute transition-all duration-100 ease-linear">
                            <PlaneIcon className="w-10 h-10 text-red-500" />
                            <div className="absolute bottom-0 left-full w-32 h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                        </div>
                    </div>
                )}

                <div className="z-10 text-center">
                    {gameState === 'betting' && <div className="text-xl font-bold animate-pulse">Waiting for next round...</div>}
                    {gameState === 'flying' || gameState === 'crashed' ? (
                        <div className={`text-6xl font-bold transition-colors ${gameState === 'crashed' ? 'text-red-500' : multiplierColor}`}>
                            {multiplier.toFixed(2)}x
                        </div>
                    ) : null}
                    {gameState === 'crashed' && <div className="text-3xl font-bold text-red-500 mt-2">Flew Away!</div>}
                </div>
            </div>

            <div className="p-3 bg-slate-800">
                {/* Controls */}
                <div className="flex items-center space-x-2 mb-2">
                    <div className="flex-grow relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">₹</span>
                        <input
                            type="number"
                            value={betAmount}
                            onChange={(e) => setBetAmount(Math.max(1, Number(e.target.value)))}
                            disabled={hasPlacedBet}
                            className="w-full bg-slate-700 rounded-full py-3 pl-7 pr-4 text-center font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                    </div>
                    <button onClick={() => setBetAmount(p => p+10)} disabled={hasPlacedBet} className="bg-slate-700 w-12 h-12 rounded-full font-bold text-lg disabled:opacity-50">+</button>
                </div>
                
                {gameState !== 'flying' ? (
                    <button
                        onClick={handlePlaceBet}
                        disabled={gameState !== 'betting'}
                        className={`w-full py-4 rounded-full font-bold text-2xl transition-all ${
                            hasPlacedBet ? 'bg-yellow-500 text-black' : 'bg-green-500 text-white'
                        } disabled:bg-gray-600`}
                    >
                        {hasPlacedBet ? 'Cancel' : 'BET'}
                    </button>
                ) : (
                    <button
                        onClick={handleCashOut}
                        disabled={!hasPlacedBet || hasCashedOut}
                        className="w-full py-4 rounded-full font-bold text-2xl bg-orange-500 text-white disabled:bg-gray-600 transition-all"
                    >
                        {hasPlacedBet ? `Cash Out ₹${(betAmount * multiplier).toFixed(2)}` : 'Place Bet Next Round'}
                    </button>
                )}
                <div className="flex justify-center mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoBet}
                            onChange={(e) => setAutoBet(e.target.checked)}
                            className="h-5 w-5 rounded bg-slate-700 border-slate-500 text-green-500 focus:ring-green-500"
                        />
                        <span className="text-sm font-semibold">Auto Bet</span>
                    </label>
                </div>
            </div>
            
            {/* Win/Loss Toast */}
            {toast && (
                <div className={`fixed top-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg font-bold text-white z-50 animate-fade-in-down ${toast.type === 'win' ? 'bg-green-500/90' : 'bg-red-500/90'}`}>
                    {toast.message}
                </div>
            )}

            {/* CSS for animations and patterns */}
            <style>
                {`
                    .scrollbar-hide::-webkit-scrollbar { display: none; }
                    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                    .bg-grid-pattern {
                        background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                        background-size: 2rem 2rem;
                    }
                    @keyframes fade-in-down {
                        0% { opacity: 0; transform: translate(-50%, -20px); }
                        100% { opacity: 1; transform: translate(-50%, 0); }
                    }
                    .animate-fade-in-down {
                        animation: fade-in-down 0.3s ease-out forwards;
                    }
                `}
            </style>
        </div>
    );
};

export default AviatorPage;