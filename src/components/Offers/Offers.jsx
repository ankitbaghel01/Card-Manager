// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const OfferManagement = () => {
//   const [offers, setOffers] = useState([]);

//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         const { data } = await axios.get('https://mocki.io/v1/31b9a992-d5e2-4947-9927-55b21cfd9c8a'); // Replace with actual offer API
//         setOffers(data.offers);
//       } catch (error) {
//         console.error('Error fetching offer data:', error);
//       }
//     };
    
//     fetchOffers();
//   }, []);

//   return (
//     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {offers.map((offer) => (
//         <div key={offer.offerId} className="bg-white shadow-lg rounded-lg p-4">
//           <h3 className="text-lg font-bold">Offer {offer.offerId}</h3>
//           <p className="text-sm text-gray-600">{offer.offerDescription}</p>
//           <p className="text-sm text-gray-600">Credit Points: {offer.creditPoints}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OfferManagement;









import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OfferManagement = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const { data } = await axios.get('https://mocki.io/v1/bc681df7-7f4a-49f4-9646-9c2e383bfa52'); // Replace with actual offer API
        setOffers(data.offers);
      } catch (error) {
        console.error('Error fetching offer data:', error);
      }
    };
    
    fetchOffers();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {offers.map((offer) => (
        <div key={offer.offerId} className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold">Offer {offer.offerId}</h3>
          <p className="text-sm text-gray-600">{offer.offerDescription}</p>
          <p className="text-sm text-gray-600">Credit Points: {offer.creditPoints}</p>
        </div>
      ))}
    </div>
  );
};

export default OfferManagement;
