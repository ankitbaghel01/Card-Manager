import React from 'react';

const BankSelect = ({ banks, onBankSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select Bank:</label>
      <select 
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        onChange={(e) => onBankSelect(e.target.value)}
      >
        <option value="">All Banks</option>
        {banks.map(bank => (
          <option key={bank.id} value={bank.name}>
            {bank.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BankSelect;
