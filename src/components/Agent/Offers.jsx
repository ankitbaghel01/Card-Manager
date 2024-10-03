import React from 'react';

const Offers = ({ offers }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Offers for Selected Card:</h2>
      <ul className="list-disc pl-5">
        {offers.map(offer => (
          <li key={offer.id} className="mt-2">{offer.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
