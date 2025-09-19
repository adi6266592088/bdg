import React from 'react';
import { Page } from '../App';
import { ChevronLeftIcon } from '../components/icons';

interface WithdrawalHistoryPageProps {
  onNavigate: (page: Page) => void;
}

// Mock data for withdrawal history
const withdrawalHistoryData = [
  {
    id: 1,
    amount: 500.00,
    status: 'Completed',
    date: '2024-09-18 14:30',
    bankName: 'State Bank of India',
    accountNumber: '**** **** **** 1234',
  },
  {
    id: 2,
    amount: 1200.50,
    status: 'Pending',
    date: '2024-09-17 10:15',
    bankName: 'HDFC Bank',
    accountNumber: '**** **** **** 5678',
  },
  {
    id: 3,
    amount: 350.00,
    status: 'Failed',
    date: '2024-09-16 18:00',
    bankName: 'State Bank of India',
    accountNumber: '**** **** **** 1234',
  },
  {
    id: 4,
    amount: 2500.00,
    status: 'Completed',
    date: '2024-09-15 09:45',
    bankName: 'HDFC Bank',
    accountNumber: '**** **** **** 5678',
  },
// Fix: Use 'as const' to infer literal types for the status property,
// which resolves the TypeScript error where 'string' was not assignable
// to '"Completed" | "Pending" | "Failed"'.
] as const;

const WithdrawalHistoryPage: React.FC<WithdrawalHistoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#373542] text-white p-3">
      <header className="flex items-center mb-4 sticky top-0 bg-[#373542] py-2">
        <button onClick={() => onNavigate('account')} className="p-2 -ml-2" aria-label="Go back to account page">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-center flex-grow">Withdrawal History</h1>
        <div className="w-6"></div>
      </header>

      <main className="space-y-3">
        {withdrawalHistoryData.length > 0 ? (
          withdrawalHistoryData.map(item => <WithdrawalItem key={item.id} {...item} />)
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p>No withdrawal history found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

interface WithdrawalItemProps {
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
  bankName: string;
  accountNumber: string;
}

const WithdrawalItem: React.FC<WithdrawalItemProps> = ({ amount, status, date, bankName, accountNumber }) => {
  const statusStyles = {
    Completed: 'text-green-400 bg-green-900/50',
    Pending: 'text-yellow-400 bg-yellow-900/50',
    Failed: 'text-red-400 bg-red-900/50',
  };

  return (
    <div className="bg-slate-800 rounded-lg p-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold">₹{amount.toFixed(2)}</span>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <div className="text-sm text-gray-400">
        <p>{date}</p>
        <p>{bankName} ({accountNumber})</p>
      </div>
    </div>
  );
};

export default WithdrawalHistoryPage;
