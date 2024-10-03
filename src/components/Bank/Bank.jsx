// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BankManagement = () => {
//   const [banks, setBanks] = useState([]);

//   useEffect(() => {
//     const fetchBanks = async () => {
//       try {
//         const { data } = await axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a'); // Replace with actual bank API
//         setBanks(data.banks);
//       } catch (error) {
//         console.error('Error fetching bank data:', error);
//       }
//     };
    
//     fetchBanks();
//   }, []);

//   return (
//     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {banks.map((bank) => (
//         <div key={bank.bankId} className="bg-white shadow-lg rounded-lg p-4">
//           <h3 className="text-lg font-bold">{bank.bankName}</h3>
//           <p className="text-sm text-gray-600">Location: {bank.bankLocation}</p>
//           <p className="text-sm text-gray-600">IFSC: {bank.bankIFSCCode}</p>
//           <p className="text-sm text-gray-600">Opening Date: {bank.bankOpeningDate}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BankManagement;









import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BankManagement = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const { data } = await axios.get('https://mocki.io/v1/bc681df7-7f4a-49f4-9646-9c2e383bfa52'); // Replace with actual bank API
        setBanks(data.banks);
      } catch (error) {
        console.error('Error fetching bank data:', error);
      }
    };
    
    fetchBanks();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {banks.map((bank) => (
        <div key={bank.bankId} className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold">{bank.bankName}</h3>
          <p className="text-sm text-gray-600">Location: {bank.bankLocation}</p>
          <p className="text-sm text-gray-600">IFSC: {bank.bankIFSCCode}</p>
          <p className="text-sm text-gray-600">Opening Date: {bank.bankOpeningDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BankManagement;
