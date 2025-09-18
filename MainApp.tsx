import React from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import GameCard from './components/GameCard';
import { SpeakerIcon, UserIcon, RefreshIcon, ChevronDownIcon, BGDLogoIcon, WarningIcon, CrownIcon, ColorWheelIcon, SmileyIcon } from './components/icons';
import { Page } from './App';

interface MainAppProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
}

// Mock Data
const popularGames = [
  { name: 'Chicken Road 2', odds: 97.6, img: 'https://picsum.photos/200/200?random=20' },
  { name: 'Win Go 1Min', odds: null, img: 'https://picsum.photos/200/200?random=21' },
  { name: 'Aviator', odds: 96.56, img: 'https://picsum.photos/200/200?random=22' },
  { name: 'Chicken Road', odds: 97.94, img: 'https://picsum.photos/200/200?random=23' },
  { name: 'Vortex', odds: 96.09, img: 'https://picsum.photos/200/200?random=24' },
  { name: 'Money Coming', odds: 97.42, img: 'https://picsum.photos/200/200?random=25' },
  { name: 'Fortune Gems 2', odds: 97.54, img: 'https://picsum.photos/200/200?random=26' },
  { name: 'Pappu Playing', odds: 96.36, img: 'https://picsum.photos/200/200?random=27' },
  { name: 'Hot Spin', odds: 96.78, img: 'https://picsum.photos/200/200?random=28' },
];

const winningData = [
    { user: 'Mem***NYI', amount: '₹200.00', avatar: 'https://picsum.photos/id/1005/50/50', gameIcon: 'https://picsum.photos/50/50?random=50' },
    { user: 'Mem***TYX', amount: '₹176.40', avatar: 'https://picsum.photos/id/1011/50/50', gameIcon: 'https://picsum.photos/50/50?random=51' },
    { user: 'Mem***SVZ', amount: '₹2,979.20', avatar: 'https://picsum.photos/id/1012/50/50', gameIcon: 'https://picsum.photos/50/50?random=52' },
    { user: 'Mem***LDA', amount: '₹1,000.00', avatar: 'https://picsum.photos/id/1025/50/50', gameIcon: 'https://picsum.photos/50/50?random=53' },
    { user: 'Mem***SDQ', amount: '₹500.00', avatar: 'https://picsum.photos/id/1027/50/50', gameIcon: 'https://picsum.photos/50/50?random=54' },
];

const earningsData = [
    { rank: 1, user: 'Mem***MENU', amount: '₹5,115,598,038.04', avatar: 'https://picsum.photos/id/3/50/50' },
    { rank: 2, user: 'Mem***EMU', amount: '₹1,659,827,661.59', avatar: 'https://picsum.photos/id/4/50/50' },
    { rank: 3, user: 'TRE***_', amount: '₹681,055,990.16', avatar: 'https://picsum.photos/id/5/50/50' },
    { rank: 4, user: 'Mem***UFW', amount: '₹600,956,336.96', avatar: 'https://picsum.photos/id/6/50/50' },
    { rank: 5, user: 'Mem***XNL', amount: '₹337,855,000.00', avatar: 'https://picsum.photos/id/7/50/50' },
    { rank: 6, user: 'KUN***ND', amount: '₹267,580,709.20', avatar: 'https://picsum.photos/id/8/50/50' },
    { rank: 7, user: 'Mem***PUM', amount: '₹154,811,972.00', avatar: 'https://picsum.photos/id/9/50/50' },
    { rank: 8, user: 'Nil***esh', amount: '₹152,489,960.00', avatar: 'https://picsum.photos/id/10/50/50' },
    { rank: 9, user: 'Mem***HKG', amount: '₹40,256,732.04', avatar: 'https://picsum.photos/id/11/50/50' },
    { rank: 10, user: 'Mem***GNS', amount: '₹36,652,000.00', avatar: 'https://picsum.photos/id/12/50/50' },
];


const MainApp: React.FC<MainAppProps> = ({ currentPage, onNavigate, isLoggedIn }) => {
  return (
    <div className="pb-28">
      <Header />
      
      <main className="p-3 space-y-4">
        {/* Promo Banner */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-black p-2 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/400/150?random=1')"}}>
            <div className="bg-white/90 rounded-md p-2 text-center text-red-600 font-bold">
                <h2 className="text-sm">BDG COMPANY ONLY OWNS</h2>
                <h2 className="text-sm">BDG GAME AND BDG WIN</h2>
                <p className="text-xs text-black font-semibold">Please use Official Website:</p>
                <p className="text-xs">[bdggame.com] To Verify URL</p>
                <WarningIcon className="w-6 h-6 mx-auto mt-1" />
            </div>
        </div>

        {/* Announcement Bar */}
        <div className="bg-slate-700/80 rounded-full flex items-center p-1 pr-2 text-white text-xs">
          <SpeakerIcon className="w-6 h-6 text-amber-400 mx-1 flex-shrink-0" />
          <div className="flex-grow overflow-hidden">
            <p className="whitespace-nowrap animate-marquee">Please Fill In The Correct Bank Card Information. The Platform Will Process Withdrawals Within 24 Hours.</p>
          </div>
          <button className="bg-gradient-to-b from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full font-semibold shadow-md text-xs ml-2 flex-shrink-0">Detail</button>
        </div>
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            .animate-marquee {
                animation: marquee 15s linear infinite;
                display: inline-block;
            }
        `}</style>

        {/* User Info Bar */}
        <div className="bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full flex items-center p-1.5 text-black font-semibold text-sm shadow-lg">
          <UserIcon className="w-5 h-5 bg-black/20 text-white rounded-full p-0.5" />
          <span className="ml-2">MemberNNGNGRMR-₹0.66</span>
          <RefreshIcon className="w-5 h-5 ml-1" />
          <div className="ml-auto bg-black/20 rounded-full p-1">
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Game Categories */}
        <div className="relative pb-5">
          <div className="grid grid-cols-3 gap-3">
            <GameCard imageUrl="https://picsum.photos/200/150?random=2" name="Lottery" />
            <GameCard imageUrl="https://picsum.photos/200/150?random=3" name="Original" />
            <GameCard imageUrl="https://picsum.photos/200/150?random=4" name="Slots" />
          </div>
           <div className="absolute -bottom-0 w-full flex justify-center">
              <button className="bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full flex items-center px-4 py-1 text-black font-bold shadow-lg border-2 border-amber-600 text-sm">
                <BGDLogoIcon className="w-6 h-6 mr-2" />
                Add to Desktop
              </button>
            </div>
        </div>
        
        {/* More Games Categories */}
        <div className="grid grid-cols-4 gap-3">
            <img src="https://picsum.photos/150/150?random=5" alt="Game 1" className="rounded-lg shadow-md" />
            <img src="https://picsum.photos/150/150?random=6" alt="Game 2" className="rounded-lg shadow-md" />
            <GameCard imageUrl="https://picsum.photos/200/150?random=15" name="Rummy" />
            <GameCard imageUrl="https://picsum.photos/200/150?random=9" name="Fishing" />
        </div>

        {/* Popular Games */}
        <Section title="Popular">
            <div className="grid grid-cols-3 gap-3">
                {popularGames.map((game, index) => (
                    <PopularGameCard key={index} {...game} />
                ))}
            </div>
        </Section>

        {/* Winning Information */}
        <Section title="Winning information">
            <div className="bg-slate-800 rounded-lg p-2 space-y-2">
                {winningData.map((win, index) => (
                    <WinningInfoItem key={index} {...win} />
                ))}
            </div>
        </Section>
        
        {/* Today's earnings chart */}
        <Section title="Today's earnings chart">
            <div className="bg-slate-800 rounded-lg p-2">
                <div className="flex justify-center space-x-4 mb-3">
                    <button className="text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1">MENU</button>
                    <button className="text-gray-400 font-bold">TNC</button>
                </div>
                <div className="flex justify-around items-end mb-3">
                    <TopEarner rank={2} {...earningsData[1]} />
                    <TopEarner rank={1} {...earningsData[0]} />
                    <TopEarner rank={3} {...earningsData[2]} />
                </div>
                <div className="space-y-1">
                    {earningsData.slice(3).map(item => <EarningListItem key={item.rank} {...item} />)}
                </div>
            </div>
        </Section>

      </main>
      
      {/* Floating Buttons */}
      <div className="fixed bottom-24 right-2 space-y-2 z-20">
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
          <ColorWheelIcon className="w-10 h-10" />
        </button>
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
          <SmileyIcon className="w-8 h-8 text-black" />
        </button>
      </div>

      <BottomNav currentPage={currentPage} onNavigate={onNavigate} isLoggedIn={isLoggedIn} />
    </div>
  );
};

const Section: React.FC<{title: string, children: React.ReactNode}> = ({title, children}) => (
    <div className="pt-2">
        <h2 className="text-white text-lg font-bold mb-2 border-l-4 border-yellow-400 pl-2">{title}</h2>
        {children}
    </div>
);

const PopularGameCard: React.FC<{name: string, odds: number | null, img: string}> = ({name, odds, img}) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden text-center">
        <img src={img} alt={name} className="w-full aspect-square object-cover" />
        <p className="text-white text-xs font-bold py-1 truncate">{name}</p>
        {odds !== null ? (
            <div className="bg-gray-700 text-xs py-0.5">
                <span className="text-gray-400">odds of </span>
                <span className="text-yellow-400 font-semibold">{odds.toFixed(2)}%</span>
            </div>
        ) : (
             <div className="bg-gray-700 text-xs py-0.5 text-transparent">.</div>
        )}
    </div>
);

const WinningInfoItem: React.FC<{user: string, amount: string, avatar: string, gameIcon: string}> = ({user, amount, avatar, gameIcon}) => (
    <div className="flex items-center bg-slate-700/50 p-1.5 rounded-md text-sm">
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <span className="text-gray-300 ml-2 font-semibold">{user}</span>
        <span className="text-gray-400 ml-auto mr-2">Receive</span>
        <span className="text-yellow-400 font-bold mr-2">{amount}</span>
        <img src={gameIcon} alt="game" className="w-8 h-8 rounded-md" />
    </div>
);

const TopEarner: React.FC<{rank: number, user: string, amount: string, avatar: string}> = ({rank, user, amount, avatar}) => {
    const isFirst = rank === 1;
    const crownColor = isFirst ? "text-yellow-400" : (rank === 2 ? "text-gray-300" : "text-amber-600");
    const pedestalHeight = isFirst ? 'h-24' : 'h-20';
    const pedestalColor = isFirst ? 'bg-yellow-500' : 'bg-yellow-600/80';
    
    return (
        <div className={`flex flex-col items-center ${isFirst ? 'w-1/3' : 'w-1/4'}`}>
            <div className="relative">
                <img src={avatar} alt={user} className={`rounded-full border-2 ${isFirst ? 'w-16 h-16 border-yellow-400' : 'w-12 h-12 border-gray-400'}`} />
                <CrownIcon className={`w-6 h-6 absolute -top-4 left-1/2 -translate-x-1/2 ${crownColor}`} />
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-bold rounded-full px-2`}>
                    NO{rank}
                </div>
            </div>
            <p className="text-white text-xs mt-3 truncate font-semibold">{user}</p>
            <div className={`${pedestalHeight} w-full ${pedestalColor} rounded-t-md flex items-end justify-center p-1`}>
                 <p className="text-black text-xs font-bold">{amount}</p>
            </div>
        </div>
    );
};

const EarningListItem: React.FC<{rank: number, user: string, amount: string, avatar: string}> = ({rank, user, amount, avatar}) => (
    <div className="flex items-center text-sm p-1">
        <span className="text-gray-400 font-bold w-6 text-center">{rank}</span>
        <img src={avatar} alt={user} className="w-8 h-8 rounded-full mx-2" />
        <span className="text-gray-300 flex-grow truncate">{user}</span>
        <div className="bg-gray-700 rounded-md px-2 py-1 text-yellow-400 font-semibold">{amount}</div>
    </div>
);


export default MainApp;