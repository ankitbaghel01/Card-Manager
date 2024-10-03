import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardManagement = () => {
  const [cards, setCards] = useState([]);
  const [agents, setAgents] = useState([]);
  const [users, setUsers] = useState([]);
  const [newCard, setNewCard] = useState({
    cardNo: '',
    name: '',
    cvv: '',
    expiry: '',
    bankId: '',
    cardType: '',
    agentId: '',  // Associate agent by their ID
    offerMappingIds: ''
  });
  const [selectedAgent, setSelectedAgent] = useState(''); // To filter cards by agent
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardResponse = await axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a');
        const agentResponse = await axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d');
        const userResponse = await axios.get('https://mocki.io/v1/6e059971-276b-4619-925d-065b381114ab');

        setCards(cardResponse.data.cards);
        setAgents(agentResponse.data.banks);  // Agents fetched
        setUsers(userResponse.data.offers); // Offers represent users
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newCard.cardNo || !newCard.name || !newCard.cvv || !newCard.expiry || !newCard.bankId || !newCard.cardType || !newCard.agentId || !newCard.offerMappingIds) {
      setError('All fields are required.');
      return;
    }
    setError('');

    try {
      // Send new card data to the server
      await axios.post('https://mocki.io/v1/new-card-api-endpoint', newCard); // Replace with correct API

      // Optimistic UI update - add the new card locally
      setCards([...cards, newCard]);

      // Reset form after submission
      setNewCard({
        cardNo: '',
        name: '',
        cvv: '',
        expiry: '',
        bankId: '',
        cardType: '',
        agentId: '',
        offerMappingIds: ''
      });

    } catch (error) {
      console.error('Error issuing new card:', error);
      setError('Failed to issue the card. Try again.');
    }
  };

  const filterCardsByAgent = (agentId) => {
    setSelectedAgent(agentId);
  };

  const filteredCards = selectedAgent
    ? cards.filter(card => card.agentId === selectedAgent)
    : cards;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Card Management</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="container mx-auto">
          {/* Issue New Card Form */}
          <h2 className="text-xl font-semibold mb-4">Issue New Card</h2>
          {error && <p className="text-red-500">{error}</p>}

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg mb-8" onSubmit={handleSubmit}>
            {/* Card Number Input */}
            <div>
              <label className="block font-medium mb-2">Card Number</label>
              <input
                type="text"
                name="cardNo"
                value={newCard.cardNo}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={newCard.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={newCard.cvv}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                value={newCard.expiry}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Bank ID</label>
              <input
                type="text"
                name="bankId"
                value={newCard.bankId}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Card Type</label>
              <input
                type="text"
                name="cardType"
                value={newCard.cardType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/* Select Agent */}
            <div>
              <label className="block font-medium mb-2">Agent</label>
              <select
                name="agentId"
                value={newCard.agentId}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Agent</option>
                {agents.map((agent) => (
                  <option key={agent.bankId} value={agent.bankId}>
                    {agent.bankName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2">Offer Mapping IDs</label>
              <input
                type="text"
                name="offerMappingIds"
                value={newCard.offerMappingIds}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Issue Card
              </button>
            </div>
          </form>

          {/* Agent Filter */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Filter Cards by Agent</h2>
            <select
              onChange={(e) => filterCardsByAgent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">All Agents</option>
              {agents.map((agent) => (
                <option key={agent.bankId} value={agent.bankId}>
                  {agent.bankName}
                </option>
              ))}
            </select>
          </div>

          {/* Display Cards */}
          <h2 className="text-xl font-semibold mb-4">All Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <div key={card.cardId} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">{card.name}</h3>
                <p>Card No: {card.cardNo}</p>
                <p>CVV: {card.cvv}</p>
                <p>Expiry Date: {card.expiry}</p>
                <p>Bank ID: {card.bankId}</p>
                <p>Agent: {agents.find(agent => agent.bankId === card.agentId)?.bankName}</p>
                <p>Card Type: {card.cardType}</p>
                <p>Offer Mapping IDs: {card.offerMappingIds}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardManagement;
