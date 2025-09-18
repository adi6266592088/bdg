
import React from 'react';
import { DownloadIcon, HeadsetIcon, BGDLogoTextIcon, USFlagIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-[#373542] p-3 flex justify-between items-center">
      <div className="flex flex-col">
        <BGDLogoTextIcon className="h-6 w-auto" />
        <div className="flex items-center mt-1">
          <USFlagIcon className="w-6 h-6" />
          <span className="text-white text-sm ml-2">BDG Game</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="bg-gradient-to-b from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-md flex items-center shadow-md">
          <DownloadIcon className="w-4 h-4 mr-1" />
          Download APP
        </button>
        <button className="bg-gradient-to-b from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-md flex items-center shadow-md">
          <HeadsetIcon className="w-4 h-4 mr-1" />
          Customer Service
        </button>
      </div>
    </header>
  );
};

export default Header;
