import React, { useState } from 'react';
import MainApp from './MainApp';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PromotionPage from './pages/PromotionPage';
import AccountPage from './pages/AccountPage';
import AddMoneyPage from './pages/AddMoneyPage';
import WithdrawPage from './pages/WithdrawPage';
import ColorGoPage from './pages/ColorGoPage';
import WithdrawalHistoryPage from './pages/WithdrawalHistoryPage';
import AviatorPage from './pages/AviatorPage';

export type Page = 'main' | 'login' | 'register' | 'promotion' | 'account' | 'addMoney' | 'withdraw' | 'colorGo' | 'withdrawHistory' | 'aviator';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('account');
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('main');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
      case 'register':
        return <RegisterPage onNavigate={navigate} />;
      case 'promotion':
        return <PromotionPage currentPage={currentPage} onNavigate={navigate} isLoggedIn={isLoggedIn} />;
      case 'account':
        // Enforce login state: If user is not logged in, show the login page.
        if (!isLoggedIn) {
          return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
        }
        return <AccountPage currentPage={currentPage} onNavigate={navigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
      case 'addMoney':
        // Also a protected route
        if (!isLoggedIn) {
          return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
        }
        return <AddMoneyPage onNavigate={navigate} />;
      case 'withdraw':
        // Also a protected route
        if (!isLoggedIn) {
          return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
        }
        return <WithdrawPage onNavigate={navigate} />;
      case 'colorGo':
        // Also a protected route
        if (!isLoggedIn) {
          return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
        }
        return <ColorGoPage onNavigate={navigate} />;
      case 'withdrawHistory':
        // Also a protected route
        if (!isLoggedIn) {
          return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
        }
        return <WithdrawalHistoryPage onNavigate={navigate} />;
      case 'aviator':
        // Also a protected route
        if (!isLoggedIn) {
            return <LoginPage onNavigate={navigate} onLoginSuccess={handleLogin} />;
        }
        return <AviatorPage onNavigate={navigate} />;
      case 'main':
      default:
        return <MainApp currentPage={currentPage} onNavigate={navigate} isLoggedIn={isLoggedIn} />;
    }
  };

  const bgColor = currentPage === 'addMoney' || currentPage === 'withdraw' ? 'bg-gray-100' : 'bg-slate-800';
  const mainContentBg = currentPage === 'addMoney' || currentPage === 'withdraw' ? 'bg-gray-100' : 'bg-[#373542]';

  return (
    <div className={`${bgColor} min-h-screen font-sans`}>
      <div className={`relative max-w-sm mx-auto ${mainContentBg}`}>
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
