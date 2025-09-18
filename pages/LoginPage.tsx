import React, { useState } from 'react';
import { Page } from '../App';
import { 
  BGDLogoTextIcon, 
  USFlagIcon, 
  ChevronLeftIcon, 
  PhoneIcon, 
  MailIcon, 
  UserIcon, 
  LockClosedIcon, 
  EyeIcon, 
  EyeSlashIcon,
  CheckCircleIcon,
  HeadsetIcon,
} from '../components/icons';

interface LoginPageProps {
  onNavigate: (page: Page) => void;
  onLoginSuccess: () => void;
}

type LoginTab = 'phone' | 'email';

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<LoginTab>('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(true);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-[#373542] text-white">
      {/* Header */}
      <header className="p-3 flex justify-between items-center">
        <button onClick={() => onNavigate('main')}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <BGDLogoTextIcon className="h-6 w-auto" />
        <div className="flex items-center space-x-1 text-yellow-400 font-semibold">
          <USFlagIcon className="w-6 h-6" />
          <span>EN</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <h1 className="text-2xl font-bold">Log in</h1>
        <p className="text-xs text-gray-400 mt-1">
          Please log in with your phone number or email.
          <br/>
          If you forget your password, please contact customer service.
        </p>

        {/* Tabs */}
        <div className="flex mt-6 border-b border-gray-600">
          <TabButton 
            icon={<PhoneIcon className="w-5 h-5 mr-2" />} 
            label="phone number" 
            isActive={activeTab === 'phone'} 
            onClick={() => setActiveTab('phone')}
          />
          <TabButton 
            icon={<><MailIcon className="w-5 h-5" /><UserIcon className="w-5 h-5 -ml-2" /></>} 
            label="Email / Account" 
            isActive={activeTab === 'email'} 
            onClick={() => setActiveTab('email')}
          />
        </div>
        
        {/* Form */}
        <form className="space-y-4 mt-6" onSubmit={handleLoginSubmit}>
          {activeTab === 'phone' && (
            <div>
              <label className="text-sm font-semibold text-gray-300 flex items-center mb-2">
                <PhoneIcon className="w-5 h-5 mr-2 text-yellow-400" /> Phone number
              </label>
              <div className="flex space-x-2">
                <div className="flex items-center bg-gray-800/50 rounded-lg px-3">
                  <span>+91</span>
                  <ChevronLeftIcon className="w-4 h-4 transform rotate-[-90deg] ml-1" />
                </div>
                <input 
                  type="tel" 
                  defaultValue="7999560942"
                  className="w-full bg-gray-800/50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          )}

          {activeTab === 'email' && (
             <div>
              <label className="text-sm font-semibold text-gray-300 flex items-center mb-2">
                <UserIcon className="w-5 h-5 mr-2 text-yellow-400" /> Account
              </label>
              <input 
                type="text" 
                placeholder="Please enter your account"
                className="w-full bg-gray-800/50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-semibold text-gray-300 flex items-center mb-2">
              <LockClosedIcon className="w-5 h-5 mr-2 text-yellow-400" /> Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'}
                defaultValue="••••••••••"
                className="w-full bg-gray-800/50 rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400"
              >
                {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <button type="button" onClick={() => setRememberPassword(!rememberPassword)} className="flex items-center space-x-2">
              <CheckCircleIcon className={`w-5 h-5 ${rememberPassword ? 'text-yellow-400' : 'text-gray-600'}`} />
              <span className="text-sm text-gray-300">Remember password</span>
            </button>
          </div>

          <div className="pt-4 space-y-3">
            <button type="submit" className="w-full bg-gradient-to-b from-yellow-400 to-amber-500 text-black font-bold py-3 rounded-full shadow-lg">
              Log in
            </button>
            <button type="button" onClick={() => onNavigate('register')} className="w-full border-2 border-yellow-400 text-yellow-400 font-bold py-3 rounded-full">
              Register
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-300">
          <a href="#" className="flex items-center space-x-1">
            <LockClosedIcon className="w-5 h-5 text-yellow-400" />
            <span>Forgot password</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <HeadsetIcon className="w-5 h-5 text-yellow-400" />
            <span>Customer Service</span>
          </a>
        </div>
      </main>
    </div>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex-1 flex items-center justify-center py-3 text-sm font-bold capitalize transition-colors duration-200 ${
      isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default LoginPage;