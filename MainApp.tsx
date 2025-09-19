

import React from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import GameCard from './components/GameCard';
import { SpeakerIcon, UserIcon, RefreshIcon, ChevronDownIcon, WarningIcon, CrownIcon, ColorWheelIcon, SmileyIcon } from './components/icons';
import { Page } from './App';

interface MainAppProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
}

const games = [
    { name: 'Color Go', imageUrl: 'https://picsum.photos/seed/wingo/200', page: 'colorGo' as Page },
    { name: 'K3', imageUrl: 'https://picsum.photos/seed/k3/200', page: 'colorGo' as Page },
    { name: '5D', imageUrl: 'https://picsum.photos/seed/5d/200', page: 'colorGo' as Page },
    { name: 'Trx Win', imageUrl: 'https://picsum.photos/seed/trx/200', page: 'colorGo' as Page },
    { name: 'Slots', imageUrl: 'https://picsum.photos/seed/slots/200', page: 'colorGo' as Page },
    { name: 'Aviator', imageUrl: 'https://picsum.photos/seed/aviator/200', page: 'aviator' as Page },
    { name: 'Fishing', imageUrl: 'https://picsum.photos/seed/fishing/200', page: 'colorGo' as Page },
    { name: 'Sports', imageUrl: 'https://picsum.photos/seed/sports/200', page: 'colorGo' as Page },
];

const MainApp: React.FC<MainAppProps> = ({ currentPage, onNavigate, isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-[#373542] text-white pb-28">
      {/*
        Fix: The <marquee> tag is obsolete and not supported in React's JSX typings.
        Replaced with a CSS animation for a scrolling text effect.
        The keyframes are defined in a <style> tag because adding new CSS files
        or modifying the Tailwind configuration is not possible under the given constraints.
      */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 15s linear infinite;
            white-space: nowrap;
          }
        `}
      </style>
      <Header />
      <main className="p-3 space-y-4">
        {/* Carousel Placeholder */}
        <div className="h-36 bg-slate-700 rounded-lg flex items-center justify-center">
            <p>Image Carousel</p>
        </div>
        
        {/* Announcement */}
        <div className="bg-slate-900/50 rounded-lg p-2 flex items-center text-sm overflow-hidden">
            <SpeakerIcon className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0" />
            <div className="flex-grow whitespace-nowrap">
                <p className="animate-marquee">Welcome to BDG Game! Wishing you a happy game and good luck!</p>
            </div>
        </div>

        {/* User Info / Wallet */}
        <div className="bg-slate-800 rounded-lg p-3 flex justify-between items-center">
            <div className="flex items-center">
                <UserIcon className="w-10 h-10 p-2 bg-slate-700 rounded-full" />
                <div className="ml-3">
                    <p className="font-bold">MEMBERNNGNGRMR</p>
                    <p className="text-sm text-gray-400">UID: 15534357</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-400">Wallet balance</p>
                <div className="flex items-center">
                    <span className="font-bold text-lg">₹ 0.66</span>
                    <RefreshIcon className="w-4 h-4 ml-2 text-gray-400" />
                </div>
            </div>
        </div>
        
        {/* Game Type Nav */}
        <div className="flex justify-around bg-slate-800 rounded-full p-1 text-sm font-semibold">
            <button className="flex-1 bg-yellow-400 text-black py-2 rounded-full">Lottery</button>
            <button className="flex-1 py-2 rounded-full">Slots</button>
            <button className="flex-1 py-2 rounded-full">Sports</button>
            <button className="flex-1 py-2 rounded-full">Casino</button>
        </div>
        
        {/* Lottery Games */}
        <div className="bg-slate-800 rounded-lg p-3">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold">Lottery</h2>
                <button className="text-xs text-gray-400 flex items-center">
                    All <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
            </div>
            {/* Win Go section */}
            <div className="bg-slate-700 rounded-lg p-3 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <ColorWheelIcon className="w-8 h-8"/>
                    <div>
                        <p className="font-bold">Win Go</p>
                        <p className="text-xs text-gray-400">Guess the color, number...</p>
                    </div>
                </div>
                <div className="flex items-center space-x-1 text-xs bg-slate-600 px-2 py-1 rounded-full">
                    <WarningIcon className="w-4 h-4 text-yellow-400" />
                    <span>How to play</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-400">1 Min</p>
                    <p className="font-semibold text-sm">202409190145</p>
                </div>
                <div className="text-center">
                     <p className="text-xs text-gray-400">Time remaining</p>
                     <div className="text-xl font-bold text-yellow-400">
                        <span>00</span>:<span>27</span>
                     </div>
                </div>
              </div>
               <div className="flex justify-around text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center font-bold text-white">?</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white">?</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center font-bold text-white">?</div>
                  <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-white">?</div>
                  <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-white">?</div>
               </div>
            </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-slate-800 rounded-lg p-3">
            <div className="flex items-center justify-center text-yellow-400 mb-2">
                <CrownIcon className="w-6 h-6" />
                <h3 className="font-bold text-lg ml-2">LEADERBOARD</h3>
                <CrownIcon className="w-6 h-6 ml-2" />
            </div>
            <div className="flex justify-around text-center">
                <LeaderboardItem rank={1} name="Me***eh" amount="₹234,435.09" />
                <LeaderboardItem rank={2} name="We***er" amount="₹198,345.54" isCenter />
                <LeaderboardItem rank={3} name="Ch***ai" amount="₹156,987.32" />
            </div>
        </div>
        
        {/* All Games */}
        <div>
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold">All Games</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {games.map(game => (
                    <GameCard 
                        key={game.name} 
                        name={game.name}
                        imageUrl={game.imageUrl}
                        onClick={() => onNavigate(game.page)}
                    />
                ))}
            </div>
        </div>

      </main>
      <BottomNav currentPage={currentPage} onNavigate={onNavigate} isLoggedIn={isLoggedIn} />
    </div>
  );
};

const LeaderboardItem: React.FC<{rank: number, name: string, amount: string, isCenter?: boolean}> = ({ rank, name, amount, isCenter }) => (
    <div className={`relative ${isCenter ? 'transform scale-110 -translate-y-2' : ''}`}>
        <div className={`w-20 h-20 rounded-full ${isCenter ? 'bg-yellow-400' : 'bg-slate-700'} mx-auto flex items-center justify-center`}>
            <SmileyIcon className={`w-12 h-12 ${isCenter ? 'text-black' : 'text-gray-400'}`} />
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-800">{rank}</div>
        <p className="font-semibold mt-2">{name}</p>
        <p className="text-xs text-yellow-400">{amount}</p>
    </div>
);


export default MainApp;
