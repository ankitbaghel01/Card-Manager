
// import { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   Title,
// } from 'chart.js';
// import axios from 'axios';

// // Register the required components for Pie chart
// ChartJS.register(ArcElement, Tooltip, Legend, Title);

// // Pie chart component
// const BankUsersPieChart = () => {
//   const [bankData, setBankData] = useState([]);
//   const [userCounts, setUserCounts] = useState([]);

//   // Fetch bank data from the API
//   useEffect(() => {
//     const fetchBankData = async () => {
//       try {
//         const response = await axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d'); // Replace with your actual API URL
//         const banks = response.data.banks;
        
//         // Generate random user counts for each bank (Replace this with actual user count data if available)
//         const randomUserCounts = banks.map(() => Math.floor(Math.random() * 1000) + 100);

//         setBankData(banks);
//         setUserCounts(randomUserCounts);
//       } catch (error) {
//         console.error("Error fetching bank data:", error);
//       }
//     };

//     fetchBankData();
//   }, []);

//   // Define the data for the pie chart
//   const data = {
//     labels: bankData.map(bank => bank.bankName),
//     datasets: [
//       {
//         label: 'Number of Users',
//         data: userCounts,
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//       },
//     ],
//   };

//   return (
//     <div className="mt-4">
//       <Pie
//         data={data}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top', // or 'bottom'
//             },
//             title: {
//               display: true,
//               text: 'Bank Users Pie Chart',
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default BankUsersPieChart;











import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import axios from 'axios';

// Register the required components for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Pie chart component
const BankUsersPieChart = () => {
  const [bankData, setBankData] = useState([]);
  const [userCounts, setUserCounts] = useState([]);

  // Fetch bank data from the API
  useEffect(() => {
    const fetchBankData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d'); // Replace with your actual API URL
        const banks = response.data.banks;

        // Generate random user counts for each bank (Replace this with actual user count data if available)
        const randomUserCounts = banks.map(() => Math.floor(Math.random() * 1000) + 100);

        setBankData(banks);
        setUserCounts(randomUserCounts);
      } catch (error) {
        console.error("Error fetching bank data:", error);
      }
    };

    fetchBankData();
  }, []);

  // Define the data for the pie chart
  const data = {
    labels: bankData.map(bank => bank.bankName),
    datasets: [
      {
        label: 'Number of Users',
        data: userCounts,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="mt-4 flex justify-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Pie
        data={data}
        height={400}  // Set height
        width={400}   // Set width
        options={{
          maintainAspectRatio: false, // Allow custom sizing
          responsive: true,
          plugins: {
            legend: {
              position: 'top', // or 'bottom'
            },
            title: {
              display: true,
              text: 'Bank Users Pie Chart',
            },
          },
        }}
      />
    </div>
  );
};

export default BankUsersPieChart;
