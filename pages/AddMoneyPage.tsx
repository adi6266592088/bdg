import React, { useState } from 'react';
import { Page } from '../App';
import { IndianFlagIcon, QrCodeIcon, PaytmIcon, PhonePeIcon, GPayIcon, UpiIcon } from '../components/icons';

interface AddMoneyPageProps {
  onNavigate: (page: Page) => void;
}

type PaymentMethod = 'paytm' | 'phonepe' | 'gpay' | 'upi';

const AddMoneyPage: React.FC<AddMoneyPageProps> = ({ onNavigate }) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('paytm');
  const [utr, setUtr] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    if (utr.trim().length === 0) {
      alert('Please enter the UTR/Transaction ID.');
      return;
    }
    setShowConfirmation(true);
  };
  
  const handleConfirm = () => {
    // In a real app, you would submit the data here.
    alert(`Transaction submitted with UTR: ${utr} via ${selectedMethod}`);
    setShowConfirmation(false);
    setUtr(''); // Reset UTR after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <span className="text-red-500 font-bold text-lg">07:18</span>
        <div className="flex items-center space-x-2 text-sm">
          <IndianFlagIcon className="w-6 h-6" />
          <span>भाषा बदलें</span>
          <span className="transform rotate-90 text-xs">▲</span>
        </div>
      </header>

      {/* Payment Details Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="text-sm text-gray-500">UPI ID:</label>
          <div className="flex items-center mt-1">
            <input 
              type="text"
              readOnly
              value="guls****4957@airtel"
              className="flex-grow bg-gray-100 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-semibold">Copy UPI</button>
          </div>
        </div>

        <div className="text-center my-6">
            <p className="text-red-500 font-semibold text-sm mb-2">FOR SINGLE TRANSACTION ONLY</p>
            <div className="flex justify-center">
                <QrCodeIcon className="w-40 h-40" />
            </div>
            <p className="text-xl font-bold mt-2">500</p>
            <p className="text-gray-500 text-sm mt-1">Paytm, PhonePe, GooglePay, Other Bank</p>
        </div>

        <div className="flex justify-center items-center space-x-4 my-4">
          <button
            onClick={() => setSelectedMethod('paytm')}
            className={`p-2 rounded-lg transition-all ${selectedMethod === 'paytm' ? 'ring-2 ring-blue-600 bg-blue-50' : 'opacity-60 hover:opacity-100'}`}
            aria-pressed={selectedMethod === 'paytm'}
            aria-label="Select Paytm"
          >
            <PaytmIcon className="h-6" />
          </button>
          <button
            onClick={() => setSelectedMethod('phonepe')}
            className={`p-2 rounded-lg transition-all ${selectedMethod === 'phonepe' ? 'ring-2 ring-blue-600 bg-blue-50' : 'opacity-60 hover:opacity-100'}`}
            aria-pressed={selectedMethod === 'phonepe'}
            aria-label="Select PhonePe"
          >
            <PhonePeIcon className="h-6" />
          </button>
          <button
            onClick={() => setSelectedMethod('gpay')}
            className={`p-2 rounded-lg transition-all ${selectedMethod === 'gpay' ? 'ring-2 ring-blue-600 bg-blue-50' : 'opacity-60 hover:opacity-100'}`}
            aria-pressed={selectedMethod === 'gpay'}
            aria-label="Select Google Pay"
          >
            <GPayIcon className="h-8" />
          </button>
          <button
            onClick={() => setSelectedMethod('upi')}
            className={`p-2 rounded-lg transition-all ${selectedMethod === 'upi' ? 'ring-2 ring-blue-600 bg-blue-50' : 'opacity-60 hover:opacity-100'}`}
            aria-pressed={selectedMethod === 'upi'}
            aria-label="Select UPI"
          >
            <UpiIcon className="h-6" />
          </button>
        </div>


        <div className="flex items-center">
            <label className="text-sm font-bold text-red-500 mr-2">*UTR:</label>
            <input 
                type="text"
                placeholder="UTR(UPI Ref.ID) must be 12 digits"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-md mt-4">
            Submit
        </button>
      </div>
      
      {/* Reminder Card */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="font-bold mb-3">Reminder</h2>
        <ol className="list-decimal list-inside text-gray-600 text-sm space-y-3">
            <li>Saving QR codes or UPI payments and modifying order amount payments are all illegal operations! Don't save payments!</li>
            <li>Please pay to the UPI copied above within the specified time, otherwise the order may not be successful and you will need to bear the loss yourself.</li>
            <li>After paying from the following payment option: PayTM,PhonePE,GooglePay,BHIM,etc.</li>
            <li>Each tracking order is provided with a UPI certificate.</li>
            <li>Important reminder: After completing the UPI transaction, please backfill Ref No./UTR No./Google Pay : UPI Transaction ID/Freecharge: Transaction ID (12digits). If you do not back fill UTR, 100% of the deposit transaction will fail. Please be sure to backfill!</li>
        </ol>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 id="dialog-title" className="text-xl font-bold mb-4">Confirm Payment Details</h2>
            <div className="space-y-3 text-left">
              <p>
                <span className="font-semibold text-gray-600">Payment Method:</span>
                <span className="ml-2 font-medium capitalize">{selectedMethod}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-600">UTR / Ref. ID:</span>
                <span className="ml-2 font-medium break-all">{utr}</span>
              </p>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMoneyPage;