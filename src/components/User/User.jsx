
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserDashboard = () => {
//   const [cards, setCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [offers, setOffers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

//   useEffect(() => {
//     // Fetch user cards
//     axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a') // Adjust this URL if necessary
//       .then(response => {
//         setCards(response.data.cards);
//       })
//       .catch(error => console.error('Error fetching cards:', error));
//   }, []);

//   const handleCardSelect = (card) => {
//     setSelectedCard(card);
//     // Fetch offers for the selected card
//     axios.get('https://mocki.io/v1/6e059971-276b-4619-925d-065b381114ab') // Adjust this URL if necessary
//       .then(response => {
//         const filteredOffers = response.data.offers.filter(offer => 
//           card.offerMappingIds.includes(offer.offerId)
//         );
//         setOffers(filteredOffers);
//         setIsModalOpen(true); // Open the modal
//       })
//       .catch(error => console.error('Error fetching offers:', error));
//   };

//   const closeModal = () => {
//     setIsModalOpen(false); // Close the modal
//     setSelectedCard(null); // Clear selected card
//     setOffers([]); // Clear offers
//   };

//   return (
    
//     <div className="p-4 ">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      
//       <CardList cards={cards} onCardSelect={handleCardSelect} />
      
//       {isModalOpen && (
//         <CardDetailsModal 
//           card={selectedCard} 
//           offers={offers} 
//           onClose={closeModal} 
//         />
//       )}
//     </div>
//   );
// };

// const CardList = ({ cards, onCardSelect }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {cards.map(card => (
//         <div 
//           key={card.cardId} 
//           className="border p-4 rounded-md shadow hover:bg-gray-100 cursor-pointer"
//           onClick={() => onCardSelect(card)}
//         >
//           <h3 className="text-lg font-bold">{card.cardType}</h3>
//           <p className="text-gray-600">Card No: {card.cardNo}</p>
//           <p className="text-gray-600">Owner: {card.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Modal component for displaying card details
// const CardDetailsModal = ({ card, offers, onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
//         <h2 className="text-xl font-semibold">Card Details</h2>
//         <p><strong>Card Type:</strong> {card.cardType}</p>
//         <p><strong>Card No:</strong> {card.cardNo}</p>
//         <p><strong>Expiry:</strong> {card.expiry}</p>
//         <p><strong>Owner:</strong> {card.name}</p>

//         {offers.length > 0 ? (
//           <div>
//             <h3 className="mt-4 text-lg font-semibold">Associated Offers:</h3>
//             <ul className="list-disc pl-5">
//               {offers.map(offer => (
//                 <li key={offer.offerId}>{offer.offerDescription}</li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <p>No offers associated with this card.</p>
//         )}

//         <div className="flex justify-end mt-4">
//           <button 
//             className="bg-red-500 text-white p-2 rounded" 
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;















import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import AdminSide from './AdminSide'; // Import AdminSide

const UserDashboard = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [offers, setOffers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Fetch user cards
    axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a') // Adjust this URL if necessary
      .then(response => {
        setCards(response.data.cards);
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
    // Fetch offers for the selected card
    axios.get('https://mocki.io/v1/6e059971-276b-4619-925d-065b381114ab') // Adjust this URL if necessary
      .then(response => {
        const filteredOffers = response.data.offers.filter(offer => 
          card.offerMappingIds.includes(offer.offerId)
        );
        setOffers(filteredOffers);
        setIsModalOpen(true); // Open the modal
      })
      .catch(error => console.error('Error fetching offers:', error));
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCard(null); // Clear selected card
    setOffers([]); // Clear offers
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 min-h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-16 bg-gray-900 md:fixed md:h-screen">
        {/* <AdminSide /> AdminSide Component for Sidebar */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mx-4 md:ml-16">
        <h1 className="text-2xl font-bold mb-4 text-white">User Dashboard</h1>
        
        <CardList cards={cards} onCardSelect={handleCardSelect} />
        
        {isModalOpen && (
          <CardDetailsModal 
            card={selectedCard} 
            offers={offers} 
            onClose={closeModal} 
          />
        )}
      </div>
    </div>
  );
};

const CardList = ({ cards, onCardSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {cards.map(card => (
        <div 
          key={card.cardId} 
          className="border p-4 bg-white rounded-md shadow hover:bg-gray-100 cursor-pointer"
          onClick={() => onCardSelect(card)}
        >
          <h3 className="text-lg font-bold">{card.cardType}</h3>
          <p className="text-gray-600">Card No: {card.cardNo}</p>
          <p className="text-gray-600">Owner: {card.name}</p>
        </div>
      ))}
    </div>
  );
};

// Modal component for displaying card details
const CardDetailsModal = ({ card, offers, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold">Card Details</h2>
        <p><strong>Card Type:</strong> {card.cardType}</p>
        <p><strong>Card No:</strong> {card.cardNo}</p>
        <p><strong>Expiry:</strong> {card.expiry}</p>
        <p><strong>Owner:</strong> {card.name}</p>

        {offers.length > 0 ? (
          <div>
            <h3 className="mt-4 text-lg font-semibold">Associated Offers:</h3>
            <ul className="list-disc pl-5">
              {offers.map(offer => (
                <li key={offer.offerId}>{offer.offerDescription}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No offers associated with this card.</p>
        )}

        <div className="flex justify-end mt-4">
          <button 
            className="bg-red-500 text-white p-2 rounded" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
