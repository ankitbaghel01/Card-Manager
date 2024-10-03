// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AgentDetails = () => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAgentDetails, setShowAgentDetails] = useState(false);

//   useEffect(() => {
//     const fetchAgents = async () => {
//       try {
//         const agentResponse = await axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d');
//         setAgents(agentResponse.data.banks);
//       } catch (error) {
//         console.error('Error fetching agent data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAgents();
//   }, []);

//   return (
//     <div className="mb-6">
//       <h2
//         className="text-lg font-semibold mb-2 cursor-pointer bg-gray-200 p-4 rounded-lg hover:bg-gray-300"
//         onClick={() => setShowAgentDetails(!showAgentDetails)}
//       >
//         Agent Details {showAgentDetails ? '▲' : '▼'}
//       </h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         showAgentDetails && (
//           <ul className="bg-white p-4 rounded-lg shadow-lg">
//             {agents.map((agent, index) => (
//               <li key={index} className="py-2 border-b border-gray-200 last:border-none">
//                 {agent.bankName} - {agent.bankLocation}
//               </li>
//             ))}
//           </ul>
//         )
//       )}
//     </div>
//   );
// };

// export default AgentDetails;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSide from './AdminSide'; // Importing the AdminSide component

const AgentDetails = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const agentResponse = await axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d');
        setAgents(agentResponse.data.banks);
      } catch (error) {
        console.error('Error fetching agent data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 min-h-screen overflow-x-hidden">
      {/* Admin Sidebar */}
      <div className="w-full md:w-16 bg-gray-900 md:fixed md:h-screen">
        <AdminSide />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mx-4 md:ml-16">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Agent Details</h1>

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((agent, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Bank Name: {agent.bankName}</p>
                <p className="text-gray-700">Location: {agent.bankLocation}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentDetails;
