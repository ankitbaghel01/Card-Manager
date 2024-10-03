import React from 'react';

const CardList = ({ cards, onCardSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map(card => (
        <div 
          key={card.id} 
          className="border p-4 rounded-md shadow hover:bg-gray-100 cursor-pointer"
          onClick={() => onCardSelect(card)}
        >
          <h3 className="text-lg font-bold">{card.card_name}</h3>
          <p className="text-gray-600">Bank: {card.bank}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
