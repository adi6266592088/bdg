import React from 'react';
import BottomNav from '../components/BottomNav';
import { Page } from '../App';
import { 
    CopyIcon, RefreshIcon, ChevronRightIcon, VipIcon, ARWalletIcon, DepositIcon,
    WithdrawIcon, VIPShieldIcon, GameHistoryIcon, TransactionHistoryIcon,
    DepositHistoryIcon, WithdrawHistoryIcon, NotificationIcon, GiftIcon, GameStatsIcon,
    LanguageIcon, SettingsIcon, FeedbackIcon, AnnouncementIcon, HeadsetIcon,
    BeginnersGuideIcon, AboutUsIcon, LogoutIcon
} from '../components/icons';

interface AccountPageProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ currentPage, onNavigate, isLoggedIn, onLogout }) => {
  return (
    <div className="min-h-screen bg-[#373542] text-white pb-28">
      <div className="bg-gradient-to-b from-amber-400 to-yellow-500 rounded-b-3xl p-4 text-white relative z-0">
        <div className="flex items-center">
          <img src="https://picsum.photos/id/237/200/200" alt="User Avatar" className="w-16 h-16 rounded-full border-2 border-amber-300" />
          <div className="ml-3">
            <div className="flex items-center">
              <span className="font-bold text-lg">MEMBERNNGNGRMR</span>
              <span className="ml-2 bg-orange-600/80 border border-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                <VipIcon className="w-4 h-3 mr-1 inline-block" /> VIP2
              </span>
            </div>
            <div className="text-xs mt-1 bg-black/20 px-2 py-1 rounded-full inline-flex items-center">
              UID | 15534357 <CopyIcon className="w-3 h-3 ml-2" />
            </div>
            <p className="text-xs mt-1">Last login: 2025-09-18 23:17:58</p>
          </div>
        </div>
      </div>

      <main className="p-3 space-y-3 -mt-4 relative z-10">
        <div className="bg-slate-800 rounded-lg p-3 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Total balance</p>
              <div className="flex items-center">
                <span className="text-2xl font-bold">₹0.66</span>
                <RefreshIcon className="w-5 h-5 ml-2 text-gray-400" />
              </div>
            </div>
            <button className="bg-gradient-to-b from-yellow-400 to-amber-500 text-black font-bold px-4 py-2 rounded-full text-sm">Enter wallet</button>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center mt-4 text-gray-300">
            <button className="flex flex-col items-center space-y-1"><ARWalletIcon className="w-8 h-8" /><span className="text-xs font-semibold">ARWallet</span></button>
            <button onClick={() => onNavigate('addMoney')} className="flex flex-col items-center space-y-1"><DepositIcon className="w-8 h-8" /><span className="text-xs font-semibold">Deposit</span></button>
            <button onClick={() => onNavigate('withdraw')} className="flex flex-col items-center space-y-1"><WithdrawIcon className="w-8 h-8" /><span className="text-xs font-semibold">Withdraw</span></button>
            <button className="flex flex-col items-center space-y-1"><VIPShieldIcon className="w-8 h-8" /><span className="text-xs font-semibold">VIP</span></button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <HistoryCard icon={<GameHistoryIcon className="w-8 h-8" />} title="Game History" subtitle="My game history" />
          <HistoryCard icon={<TransactionHistoryIcon className="w-8 h-8" />} title="Transaction" subtitle="My transaction history" />
          <HistoryCard icon={<DepositHistoryIcon className="w-8 h-8" />} title="Deposit" subtitle="My deposit history" />
          <HistoryCard icon={<WithdrawHistoryIcon className="w-8 h-8" />} title="Withdraw" subtitle="My withdraw history" onClick={() => onNavigate('withdrawHistory')} />
        </div>

        <div className="bg-slate-800 rounded-lg shadow-lg text-gray-300">
          <SettingsItem icon={<NotificationIcon className="w-6 h-6 text-yellow-400" />} label="Notification" />
          <SettingsItem icon={<GiftIcon className="w-6 h-6 text-yellow-400" />} label="Gifts" />
          <SettingsItem icon={<GameStatsIcon className="w-6 h-6 text-yellow-400" />} label="Game statistics" />
          <SettingsItem icon={<LanguageIcon className="w-6 h-6 text-yellow-400" />} label="Language" value="English" />
        </div>

        <div className="bg-slate-800 rounded-lg p-3 shadow-lg">
          <h3 className="font-bold mb-3">Service center</h3>
          <div className="grid grid-cols-3 gap-3 text-center text-gray-300 text-sm">
            <ServiceCenterItem icon={<SettingsIcon className="w-8 h-8" />} label="Settings" />
            <ServiceCenterItem icon={<FeedbackIcon className="w-8 h-8" />} label="Feedback" />
            <ServiceCenterItem icon={<AnnouncementIcon className="w-8 h-8" />} label="Announcement" />
            <ServiceCenterItem icon={<HeadsetIcon className="w-8 h-8" />} label="Customer Service" />
            <ServiceCenterItem icon={<BeginnersGuideIcon className="w-8 h-8" />} label="Beginner's Guide" />
            <ServiceCenterItem icon={<AboutUsIcon className="w-8 h-8" />} label="About us" />
          </div>
        </div>

        <button onClick={onLogout} className="w-full border-2 border-yellow-400 text-yellow-400 font-bold py-3 rounded-full flex items-center justify-center space-x-2">
            <LogoutIcon className="w-6 h-6 transform -scale-x-100"/>
            <span>Log out</span>
        </button>

      </main>
      <BottomNav currentPage={currentPage} onNavigate={onNavigate} isLoggedIn={isLoggedIn} />
    </div>
  );
};

const HistoryCard: React.FC<{icon: React.ReactNode; title: string; subtitle: string; onClick?: () => void}> = ({ icon, title, subtitle, onClick }) => (
  <button onClick={onClick} className="bg-slate-800 rounded-lg p-3 flex items-center shadow-lg text-left w-full hover:bg-slate-700 active:bg-slate-900 transition-colors disabled:opacity-50" disabled={!onClick}>
    {icon}
    <div className="ml-3">
      <p className="font-bold">{title}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  </button>
);

const SettingsItem: React.FC<{icon: React.ReactNode; label: string; value?: string}> = ({ icon, label, value }) => (
  <button className="w-full flex items-center p-3 text-left border-b border-slate-700/50 last:border-b-0">
    <div className="p-1 bg-yellow-400/20 rounded-md mr-3">{icon}</div>
    <span className="flex-grow font-semibold">{label}</span>
    {value && <span className="text-gray-400 text-sm mr-2">{value}</span>}
    <ChevronRightIcon className="w-5 h-5 text-gray-500" />
  </button>
);

const ServiceCenterItem: React.FC<{icon: React.ReactNode; label: string}> = ({ icon, label }) => (
    <div className="flex flex-col items-center space-y-1 text-yellow-400">
        {icon}
        <span className="text-xs font-semibold text-gray-300">{label}</span>
    </div>
);


export default AccountPage;