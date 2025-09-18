import React from 'react';
import { Page } from '../App';
import { IndianFlagIcon, QrCodeIcon, PaytmIcon, PhonePeIcon, GPayIcon, UpiIcon } from '../components/icons';

interface AddMoneyPageProps {
  onNavigate: (page: Page) => void;
}

const AddMoneyPage: React.FC<AddMoneyPageProps> = ({ onNavigate }) => {
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
            <PaytmIcon className="h-6" />
            <PhonePeIcon className="h-6" />
            <GPayIcon className="h-8" />
            <UpiIcon className="h-6" />
        </div>

        <div className="flex items-center">
            <label className="text-sm font-bold text-red-500 mr-2">*UTR:</label>
            <input 
                type="text"
                placeholder="UTR(UPI Ref.ID) must be 12 digits"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-md mt-4">
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

    </div>
  );
};

export default AddMoneyPage;
