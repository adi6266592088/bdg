import React from 'react';
import BottomNav from '../components/BottomNav';
import { Page } from '../App';
import { 
    FilterIcon, 
    UserIcon,
    TeamIcon,
    CopyIcon,
    ChevronRightIcon,
    SubordinateDataIcon,
    PromotionIcon,
    InvitationRulesIcon,
    AgentServiceIcon,
    RebateRatioIcon,
    PromotionDataIcon
} from '../components/icons';

interface PromotionPageProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
}

const PromotionPage: React.FC<PromotionPageProps> = ({ currentPage, onNavigate, isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-[#373542] text-white pb-28">
      {/* Header */}
      <header className="p-3 flex justify-between items-center sticky top-0 bg-[#373542] z-10">
        <div className="w-6"></div>
        <h1 className="text-xl font-bold">Agency</h1>
        <button className="text-yellow-400">
          <FilterIcon className="w-6 h-6" />
        </button>
      </header>
      
      <main className="p-3 space-y-4">
        {/* Commission Card */}
        <div className="bg-gradient-to-b from-amber-400 to-yellow-500 rounded-lg p-4 text-center text-black/80">
          <p className="text-4xl font-bold">0</p>
          <div className="inline-block bg-black/70 text-white text-xs px-3 py-1 rounded-full my-2">
            Yesterday's total commission
          </div>
          <p className="text-xs font-semibold">Upgrade the level to increase commission income</p>
        </div>

        {/* Subordinates Card */}
        <div className="bg-slate-800 rounded-lg p-3">
          <div className="grid grid-cols-2 gap-px bg-gray-600">
            <div className="bg-slate-800 p-2">
              <div className="flex items-center text-sm font-bold text-yellow-400 mb-2">
                <UserIcon className="w-5 h-5 mr-1" /> Direct subordinates
              </div>
              <SubordinateStat label="number of register" value={0} />
              <SubordinateStat label="Deposit number" value={0} isGreen />
              <SubordinateStat label="Deposit amount" value={0} />
              <SubordinateStat label="Number of people making first deposit" value={0} />
            </div>
            <div className="bg-slate-800 p-2">
              <div className="flex items-center text-sm font-bold text-yellow-400 mb-2">
                <TeamIcon className="w-5 h-5 mr-1" /> Team subordinates
              </div>
              <SubordinateStat label="number of register" value={0} />
              <SubordinateStat label="Deposit number" value={0} />
              <SubordinateStat label="Deposit amount" value={0} />
              <SubordinateStat label="Number of people making first deposit" value={0} />
            </div>
          </div>
        </div>

        {/* QR Code Button */}
        <button className="w-full bg-gradient-to-b from-yellow-400 to-amber-500 text-black font-bold py-3 rounded-full shadow-lg text-lg">
          Download QR Code
        </button>

        {/* Action List */}
        <div className="space-y-2">
          <div className="bg-slate-800 rounded-lg p-3 flex justify-between items-center text-sm">
             <div className="flex items-center text-gray-300">
                 <div className="p-1.5 bg-yellow-400/20 rounded-md mr-3"><CopyIcon className="w-5 h-5 text-yellow-400"/></div>
                 Copy invitation code
             </div>
             <div className="flex items-center space-x-2 text-gray-400">
                <span>5546715584357</span>
                <CopyIcon className="w-5 h-5" />
             </div>
          </div>

          <ActionItem icon={<SubordinateDataIcon className="w-5 h-5 text-yellow-400"/>} label="Subordinate data" />
          <ActionItem icon={<PromotionIcon className="w-5 h-5 text-yellow-400"/>} label="Commission detail" />
          <ActionItem icon={<InvitationRulesIcon className="w-5 h-5 text-yellow-400"/>} label="Invitation rules" />
          <ActionItem icon={<AgentServiceIcon className="w-5 h-5 text-yellow-400"/>} label="Agent line customer service" />
          <ActionItem icon={<RebateRatioIcon className="w-5 h-5 text-yellow-400"/>} label="Rebate ratio" />
        </div>

        {/* Promotion Data Card */}
        <div className="bg-slate-800 rounded-lg p-3">
            <div className="flex items-center text-sm font-bold text-yellow-400 mb-3">
                <PromotionDataIcon className="w-5 h-5 mr-2" /> promotion data
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
                <PromotionStat value={0} label="This Week" />
                <PromotionStat value={0} label="Total commission" />
                <PromotionStat value={0} label="direct subordinate" />
                <PromotionStat value={0} label="Total number of subordinates in the team" />
            </div>
        </div>
      </main>

      <BottomNav currentPage={currentPage} onNavigate={onNavigate} isLoggedIn={isLoggedIn} />
    </div>
  );
};

const SubordinateStat: React.FC<{label: string, value: number, isGreen?: boolean}> = ({label, value, isGreen}) => (
    <div className="text-xs text-gray-400 my-1">
        <p className={`font-bold text-lg ${isGreen ? 'text-green-400' : 'text-white'}`}>{value}</p>
        <p className="capitalize">{label}</p>
    </div>
);

const ActionItem: React.FC<{icon: React.ReactNode, label: string}> = ({ icon, label }) => (
    <button className="w-full bg-slate-800 rounded-lg p-3 flex justify-between items-center text-sm text-gray-300">
        <div className="flex items-center">
            <div className="p-1.5 bg-yellow-400/20 rounded-md mr-3">{icon}</div>
            {label}
        </div>
        <ChevronRightIcon className="w-5 h-5 text-gray-500" />
    </button>
);

const PromotionStat: React.FC<{label: string, value: number}> = ({label, value}) => (
    <div>
        <p className="text-xl font-bold">{value}</p>
        <p className="text-xs text-gray-400 capitalize">{label}</p>
    </div>
)

export default PromotionPage;