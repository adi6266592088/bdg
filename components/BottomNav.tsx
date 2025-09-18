import React from 'react';
import { HomeIcon, ActivityIcon, PromotionIcon, AccountIcon } from './icons';
import { Page } from '../App';

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate, isLoggedIn }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto z-10">
      <div className="bg-[#373542] rounded-t-2xl shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)] relative h-[70px]">
        <div className="flex justify-around items-center h-full text-gray-300">
          <NavItem icon={<HomeIcon className="w-6 h-6" />} label="Home" active={currentPage === 'main'} onClick={() => onNavigate('main')} />
          <NavItem icon={<ActivityIcon className="w-6 h-6" />} label="Activity" />
          {/* Placeholder for the large central button */}
          <div className="w-16"></div>
          <NavItem icon={<PromotionIcon className="w-6 h-6" />} label="Promotion" active={currentPage === 'promotion'} onClick={() => onNavigate('promotion')} />
          <NavItem 
            icon={<AccountIcon className="w-6 h-6" />} 
            label="Account" 
            active={currentPage === 'login' || currentPage === 'register' || currentPage === 'account'} 
            onClick={() => onNavigate(isLoggedIn ? 'account' : 'login')} 
          />
        </div>
        
        {/* Central Button */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 rounded-full bg-[#373542] flex items-center justify-center">
            <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-b from-yellow-400 to-amber-600 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-300 to-yellow-500 flex flex-col items-center justify-center text-black shadow-inner">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  GO
                </div>
                <span className="text-xs font-bold mt-0.5">Get ₹300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => {
  const textColor = active ? 'text-yellow-400' : 'text-gray-300';
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center space-y-1 ${textColor}`}>
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
};

export default BottomNav;