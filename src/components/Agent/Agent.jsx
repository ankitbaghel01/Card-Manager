
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AgentSide from './AgentSide';
import BankWiseCardChart from './BankWiseCardChart';

const AgentDashboard = () => {
  const [banks, setBanks] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBank, setSelectedBank] = useState('');
  const [offers, setOffers] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [allOffers, setAllOffers] = useState([]);
  const [newCardData, setNewCardData] = useState({
    cardNumber: '',
    name: '',
    cvv: '',
    expiryDate: '',
    bankId: '',
    agent: '',
    cardType: '',
    offerMappingIds: [],
  });
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false); // State for card details modal

  useEffect(() => {
    // Fetch banks
    axios.get('https://mocki.io/v1/347baf8b-ced9-4e28-8490-eef7ec0cf34d')
      .then(response => {
        setBanks(response.data.banks);
      })
      .catch(error => console.error('Error fetching banks:', error));

    // Fetch cards
    axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a')
      .then(response => {
        setCards(response.data.cards);
      })
      .catch(error => console.error('Error fetching cards:', error));

    // Fetch all offers
    axios.get('https://mocki.io/v1/6e059971-276b-4619-925d-065b381114ab')
      .then(response => {
        setAllOffers(response.data.offers);
      })
      .catch(error => console.error('Error fetching offers:', error));
  }, []);

  const handleBankSelect = (bankId) => {
    setSelectedBank(bankId);
    setSelectedCard(null); // Reset selected card when changing bank
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
    const cardOffers = card.offerMappingIds.map(offerId =>
      allOffers.find(offer => offer.offerId === offerId)
    );
    setOffers(cardOffers); // Set offers specific to the selected card
    setIsCardDetailsVisible(true); // Show card details modal
  };

  // Filter cards based on the selected bank
  const filteredCards = selectedBank
    ? cards.filter(card => card.bankId === parseInt(selectedBank))
    : cards;

  // Handle issuing a new card by the agent
  const handleCardIssue = () => {
    const newCard = {
      ...newCardData,
      cardId: Math.floor(Math.random() * 100000), // Generate a random card ID
    };

    // Ensure the card has a valid bankId
    if (!newCard.bankId) {
      alert('Please select a bank before issuing the card.');
      return;
    }

    setCards((prevCards) => [...prevCards, newCard]); // Add the new card to the list of cards
    alert('Card issued successfully!');

    // Reset the newCardData to clear the form
    setNewCardData({
      cardNumber: '',
      name: '',
      cvv: '',
      expiryDate: '',
      bankId: '',
      agent: '',
      cardType: '',
      offerMappingIds: [],
    });

    setIsFormVisible(false); // Hide the form after issuing the card
  };

  // Handle input changes for issuing a new card
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Close card details modal
  const closeCardDetails = () => {
    setIsCardDetailsVisible(false);
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 min-h-screen overflow-x-hidden">
      {/* Admin Sidebar */}
      <div className="w-full md:w-16 bg-gray-900 md:fixed md:h-screen">
        {/* <AgentSide />   */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mx-4 md:ml-16">
        <h1 className="text-2xl text-white font-bold mb-4">Agent Dashboard</h1>
        <BankWiseCardChart cards={cards} />
        {/* Add Card Button in Top Right Corner */}
        <button
          className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded"
          onClick={() => setIsFormVisible(true)} // Show the form when clicked
        >
          Add Card
        </button>

        {/* Bank dropdown selector */}
        <BankSelect banks={banks} onBankSelect={handleBankSelect} />

        {/* Card list based on the selected bank */}
        <CardList cards={filteredCards} onCardSelect={handleCardSelect} />

        {/* Offers shown only if a card is selected */}
        {selectedCard && <Offers offers={offers} />}

        {/* Bank Wise Cards Issued Chart */}
        {/* <BankWiseCardChart cards={cards} /> */}

        {/* Form to issue a new card */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-4">Issue a New Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="p-2 border"
                  value={newCardData.cardNumber}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  className="p-2 border"
                  value={newCardData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="p-2 border"
                  value={newCardData.cvv}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date"
                  className="p-2 border"
                  value={newCardData.expiryDate}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="agent"
                  placeholder="Agent"
                  className="p-2 border"
                  value={newCardData.agent}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="cardType"
                  placeholder="Card Type"
                  className="p-2 border"
                  value={newCardData.cardType}
                  onChange={handleInputChange}
                />
              </div>
              <select
                name="bankId"
                className="p-2 border mt-4"
                onChange={handleInputChange}
              >
                <option value="">Select a Bank</option>
                {banks.map((bank) => (
                  <option key={bank.bankId} value={bank.bankId}>
                    {bank.bankName}
                  </option>
                ))}
              </select>
              <button
                className="bg-blue-500 text-white p-2 rounded mt-4"
                onClick={handleCardIssue}
              >
                Issue Card
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded mt-4 ml-2"
                onClick={() => setIsFormVisible(false)} // Hide the form when clicked
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Card Details Modal */}
        {isCardDetailsVisible && selectedCard && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-4">Card Details</h2>
              <p><strong>Card Number:</strong> {selectedCard.cardNumber}</p>
              <p><strong>Name:</strong> {selectedCard.name}</p>
              <p><strong>CVV:</strong> {selectedCard.cvv}</p>
              <p><strong>Expiry Date:</strong> {selectedCard.expiryDate}</p>
              <p><strong>Bank:</strong> {selectedCard.bankId}</p>
              <p><strong>Agent:</strong> {selectedCard.agent}</p>
              <p><strong>Card Type:</strong> {selectedCard.cardType}</p>
              <p><strong>Offers:</strong> {offers.map((offer) => (
                <span key={offer.offerId} className="block">{offer.offerDescription}</span>
              ))}</p>
              <button
                className="bg-red-500 text-white p-2 rounded mt-4"
                onClick={closeCardDetails}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BankSelect = ({ banks, onBankSelect }) => (
  <select
    className="mb-4 p-2 border"
    onChange={(e) => onBankSelect(e.target.value)}
  >
    <option value="">Select a Bank</option>
    {banks.map((bank) => (
      <option key={bank.bankId} value={bank.bankId}>
        {bank.bankName}
      </option>
    ))}
  </select>
);

const CardList = ({ cards, onCardSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
    {cards.map((card) => (
      <div key={card.cardId} className="bg-gray-700 p-4 rounded cursor-pointer" onClick={() => onCardSelect(card)}>
        <h3 className="text-lg font-semibold">{card.cardNumber}</h3>
        <p className="text-gray-400">{card.name}</p>
      </div>
    ))}
  </div>
);

const Offers = ({ offers }) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Offers:</h2>
    {offers.length > 0 ? (
      <ul className="list-disc pl-5">
        {offers.map((offer) => (
          <li key={offer.offerId}>{offer.offerDescription}</li>
        ))}
      </ul>
    ) : (
      <p>No offers available for this card.</p>
    )}
  </div>
);

export default AgentDashboard;
