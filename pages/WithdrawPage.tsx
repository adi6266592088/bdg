import React, { useState } from 'react';
import { Page } from '../App';
import { ChevronLeftIcon } from '../components/icons';

interface WithdrawPageProps {
  onNavigate: (page: Page) => void;
}

const initialBankAccounts = [
    { id: 'account1', bankName: 'State Bank of India', accountNumber: '**** **** **** 1234' },
    { id: 'account2', bankName: 'HDFC Bank', accountNumber: '**** **** **** 5678' }
];

const WithdrawPage: React.FC<WithdrawPageProps> = ({ onNavigate }) => {
  const [amount, setAmount] = useState('');
  const [selectedAccountId, setSelectedAccountId] = useState('account1');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // State for bank accounts and the "add account" modal
  const [bankAccounts, setBankAccounts] = useState(initialBankAccounts);
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [newBankName, setNewBankName] = useState('');
  const [newAccountNumber, setNewAccountNumber] = useState('');
  const [newIfscCode, setNewIfscCode] = useState('');

  const handleWithdrawClick = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmWithdraw = () => {
    // In a real app, this would trigger the withdrawal process
    alert(`Withdrawing ₹${amount} to the selected account.`);
    setShowConfirmation(false);
    onNavigate('account');
  };
  
  const handleSaveAccount = () => {
    if (!newBankName.trim() || !newAccountNumber.trim() || !newIfscCode.trim()) {
      alert('Please fill in all the bank account details.');
      return;
    }

    const newAccount = {
        id: `account${Date.now()}`, // Use a more robust ID in a real app
        bankName: newBankName,
        // Mask the account number for display
        accountNumber: `**** **** **** ${newAccountNumber.slice(-4)}`
    };

    setBankAccounts(prevAccounts => [...prevAccounts, newAccount]);
    
    // Close modal and reset fields
    setIsAddAccountModalOpen(false);
    setNewBankName('');
    setNewAccountNumber('');
    setNewIfscCode('');
  };
  
  const selectedAccountDetails = bankAccounts.find(acc => acc.id === selectedAccountId);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 font-sans">
      {/* Header */}
      <header className="flex items-center mb-6">
        <button onClick={() => onNavigate('account')} className="p-2 -ml-2" aria-label="Go back to account page">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-center flex-grow">Withdraw</h1>
        <div className="w-6"></div> {/* Spacer to center title */}
      </header>

      <main className="space-y-6">
        {/* Balance Info */}
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Available Balance</p>
            <p className="text-3xl font-bold">₹0.66</p>
        </div>

        {/* Amount Input */}
        <div className="bg-white p-4 rounded-lg shadow-md">
            <label htmlFor="withdraw-amount" className="text-sm font-semibold text-gray-600">Withdrawal Amount</label>
            <div className="relative mt-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lg font-bold text-gray-500">₹</span>
                <input
                    id="withdraw-amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 rounded-md pl-8 pr-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Min: ₹100</span>
                <span>Max: ₹50,000</span>
            </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-sm font-semibold text-gray-600 mb-3">Select Bank Account</h2>
            <div className="space-y-3" role="radiogroup">
                {bankAccounts.map(account => (
                     <BankAccountItem
                        key={account.id}
                        bankName={account.bankName}
                        accountNumber={account.accountNumber}
                        isSelected={selectedAccountId === account.id}
                        onSelect={() => setSelectedAccountId(account.id)}
                    />
                ))}
            </div>
            <button
              onClick={() => setIsAddAccountModalOpen(true)}
              className="w-full text-blue-600 font-semibold py-2 mt-3 rounded-md hover:bg-blue-50 transition-colors"
            >
                + Add New Bank Account
            </button>
        </div>

        {/* Submit Button */}
        <button
            onClick={handleWithdrawClick}
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-md shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            Withdraw Now
        </button>

        {/* Withdrawal Rules */}
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold mb-3">Withdrawal Rules</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li>Withdrawal time is from 9:00 to 23:00.</li>
                <li>Minimum withdrawal amount is ₹100.</li>
                <li>A handling fee of 2% will be charged for each withdrawal.</li>
                <li>Withdrawals will be processed within 24 hours.</li>
            </ul>
        </div>
      </main>

       {/* Confirmation Dialog */}
       {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 id="dialog-title" className="text-xl font-bold mb-4">Confirm Withdrawal</h2>
            <div className="space-y-3 text-left">
              <p>
                <span className="font-semibold text-gray-600">Amount:</span>
                <span className="ml-2 font-bold text-lg">₹{parseFloat(amount).toFixed(2)}</span>
              </p>
              <div>
                <span className="font-semibold text-gray-600">To:</span>
                <div className="mt-1 p-2 border rounded-md bg-gray-50">
                  <p className="font-medium">{selectedAccountDetails?.bankName}</p>
                  <p className="text-sm text-gray-500">{selectedAccountDetails?.accountNumber}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmWithdraw}
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Account Modal */}
      {isAddAccountModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="add-account-dialog-title">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                <h2 id="add-account-dialog-title" className="text-xl font-bold mb-4">Add New Bank Account</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
                        <input type="text" id="bankName" value={newBankName} onChange={(e) => setNewBankName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
                        <input type="text" id="accountNumber" value={newAccountNumber} onChange={(e) => setNewAccountNumber(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">IFSC Code</label>
                        <input type="text" id="ifscCode" value={newIfscCode} onChange={(e) => setNewIfscCode(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                </form>
                <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={() => setIsAddAccountModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300">
                        Cancel
                    </button>
                    <button onClick={handleSaveAccount} className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
                        Save Account
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

interface BankAccountItemProps {
    bankName: string;
    accountNumber: string;
    isSelected: boolean;
    onSelect: () => void;
}

const BankAccountItem: React.FC<BankAccountItemProps> = ({ bankName, accountNumber, isSelected, onSelect }) => (
    <div
        onClick={onSelect}
        onKeyPress={(e) => (e.key === ' ' || e.key === 'Enter') && onSelect()}
        className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${isSelected ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-300'}`}
        role="radio"
        aria-checked={isSelected}
        tabIndex={0}
    >
        <div>
            <p className="font-semibold">{bankName}</p>
            <p className="text-sm text-gray-500">{accountNumber}</p>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}>
            {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
        </div>
    </div>
);


export default WithdrawPage;