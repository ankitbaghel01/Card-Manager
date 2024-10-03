import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MaxAgentDetails = () => {
  const [cards, setCards] = useState([]);
  const [maxAgent, setMaxAgent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showMaxAgentDetails, setShowMaxAgentDetails] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardResponse = await axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a');
        setCards(cardResponse.data.cards);

        const agentWithMaxCards = cardResponse.data.cards.reduce((acc, card) => {
          acc[card.agent] = (acc[card.agent] || 0) + 1;
          return acc;
        }, {});

        const maxAgentName = Object.keys(agentWithMaxCards).reduce(
          (a, b) => (agentWithMaxCards[a] > agentWithMaxCards[b] ? a : b),
          ''
        );
        setMaxAgent(maxAgentName);
      } catch (error) {
        console.error('Error fetching card data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="mb-6">
      <h2
        className="text-lg font-semibold mb-2 cursor-pointer bg-gray-200 p-4 rounded-lg hover:bg-gray-300"
        onClick={() => setShowMaxAgentDetails(!showMaxAgentDetails)}
      >
        Agent with Maximum Cards Issued {showMaxAgentDetails ? '▲' : '▼'}
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        showMaxAgentDetails && (
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p>{maxAgent}</p>
          </div>
        )
      )}
    </div>
  );
};

export default MaxAgentDetails;
