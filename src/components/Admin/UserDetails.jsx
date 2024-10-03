import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSide from './AdminSide'; // Importing the AdminSide component

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await axios.get('https://mocki.io/v1/6e059971-276b-4619-925d-065b381114ab');
        setUsers(userResponse.data.offers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 min-h-screen overflow-x-hidden">
      {/* Admin Sidebar */}
      <div className="w-full md:w-16 bg-gray-900 md:fixed md:h-screen">
        <AdminSide />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mx-4 md:ml-16">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">User Details</h1>

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">{user.offerDescription}</p>
                <p className="text-gray-700">{user.creditPoints} Points</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
