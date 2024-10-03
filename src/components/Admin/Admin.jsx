


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSide from './AdminSide';

const AdminDashboard = () => {
  const [cards, setCards] = useState([]);
  const [agents, setAgents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMaxAgentDetails, setShowMaxAgentDetails] = useState(false);


  const agentWithMaxCards = cards.reduce((acc, card) => {
        acc[card.agent] = (acc[card.agent] || 0) + 1;
        return acc;
      }, {});
    
      const maxAgent = Object.keys(agentWithMaxCards).reduce((a, b) => agentWithMaxCards[a] > agentWithMaxCards[b] ? a : b, '');
    
      const maxAgentDetails = agents.find(agent => agent.bankName === maxAgent);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardResponse = await axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a');
        const agentResponse = await axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d');
        const userResponse = await axios.get('https://mocki.io/v1/6e059971-276b-4619-925d-065b381114ab');

        setCards(cardResponse.data.cards);
        setAgents(agentResponse.data.banks);
        setUsers(userResponse.data.offers);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCards = cards.length;
  const totalAgents = agents.length;
  const totalUsers = users.length;

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 min-h-screen overflow-x-hidden">
      <div className="w-full md:w-16 bg-gray-900 md:fixed md:h-screen">
        <AdminSide />
      </div>
      <div className="flex-1 p-4 mx-4 md:ml-16">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Admin Dashboard</h1>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <div className="container mx-auto">
            {/* Overview Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
              <DashboardCard title="Cards Issued" value={totalCards} color="text-white bg-blue-400" />
              <DashboardCard title="Agents Available" value={totalAgents} color="text-white bg-green-500" />
              <DashboardCard title="Users" value={totalUsers} color="text-white bg-yellow-400" />
           

 
</div>




<div className='w-full sm:w-full lg:w-1/2' >



{maxAgent && (
                <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-2">Agent with Maximum Cards</h3>
                  <p className="text-xl font-bold">{maxAgent}</p>
                  {maxAgentDetails && (
                    <>
                      <p>{maxAgentDetails.bankName}</p>
                      <p>{maxAgentDetails.bankLocation}</p>
                    </>
                  )}
                </div>
              )}

</div>

            {/* Agents Card */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-white">Agent Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {agents.map((agent, index) => (
                  <InfoCard key={index} title={agent.bankName} description={agent.bankLocation} />
                ))}
              </div>
            </div>

            {/* Users Card */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-white">User Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user, index) => (
                  <InfoCard key={index} title={user.offerDescription} description={`${user.creditPoints} Points`} />
                ))}
              </div>
            </div>

            {/* Cards Issued */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-white">Cards Issued</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card) => (
                  <div
                    key={card.cardId}
                    className="bg-white p-4 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedCard(card)}
                  >
                    <p><strong>Card Number:</strong> {card.cardNo}</p>
                    <p><strong>Cardholder:</strong> {card.name}</p>
                    <p><strong>Agent:</strong> {card.agent}</p>
                    <p><strong>Type:</strong> {card.cardType}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popup Modal for Card Details */}
            {selectedCard && (
              <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Card Component for Dashboard Overview
const DashboardCard = ({ title, value, color }) => (
  <div className={`p-6 ${color} rounded-lg shadow-lg text-center`}>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

// Generic Info Card
const InfoCard = ({ title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Modal for Card Details
const CardModal = ({ card, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg shadow-lg relative w-3/4 md:w-1/2">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Card Details</h2>
      <p><strong>Card Number:</strong> {card.cardNo}</p>
      <p><strong>Cardholder:</strong> {card.name}</p>
      <p><strong>Agent:</strong> {card.agent}</p>
      <p><strong>Card Type:</strong> {card.cardType}</p>
      <p><strong>Expiry Date:</strong> {card.expiry}</p>
      <p><strong>Offers:</strong> {card.offerMappingIds.join(', ')}</p>
    </div>
  </div>
);

export default AdminDashboard;



