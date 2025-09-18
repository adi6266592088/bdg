import React from 'react';
import { Page } from '../App';

interface RegisterPageProps {
  onNavigate: (page: Page) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#373542] text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <p className="mb-4">Registration form will be here.</p>
      <button 
        onClick={() => onNavigate('login')}
        className="text-yellow-400 underline"
      >
        Back to Login
      </button>
    </div>
  );
};

export default RegisterPage;
