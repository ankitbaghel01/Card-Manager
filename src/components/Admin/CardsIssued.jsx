





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSide from './AdminSide'; // Importing the AdminSide component

const CardsIssued = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardResponse = await axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a');
        setCards(cardResponse.data.cards);
      } catch (error) {
        console.error('Error fetching card data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 min-h-screen overflow-x-hidden">
      {/* Admin Sidebar */}
      <div className="w-full md:w-16 bg-gray-900 md:fixed md:h-screen">
        <AdminSide />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mx-4 md:ml-16">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Cards Issued</h1>

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        )}

        {/* Card Modal for Details */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-3/4 md:w-1/2">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedCard(null)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">Card Details</h2>
              <p><strong>Card Number:</strong> {selectedCard.cardNo}</p>
              <p><strong>Cardholder:</strong> {selectedCard.name}</p>
              <p><strong>Agent:</strong> {selectedCard.agent}</p>
              <p><strong>Card Type:</strong> {selectedCard.cardType}</p>
              <p><strong>Expiry Date:</strong> {selectedCard.expiry}</p>
              <p><strong>Offers:</strong> {selectedCard.offerMappingIds.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsIssued;
