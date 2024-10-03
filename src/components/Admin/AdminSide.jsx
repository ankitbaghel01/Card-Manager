

// import React, { useState } from 'react';
// import { List, Users, Landmark,Club, LayoutDashboard, LogOut } from 'lucide-react'; // Ensure correct imports
// import { Link, useNavigate } from 'react-router-dom';

// const AdminSide = () => {
//   const [user, setUser] = useState(null);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const logout = () => {
//     try {
//       // Assuming you're using tokens, clear token from localStorage or sessionStorage
//       localStorage.removeItem('authToken'); // Adjust based on your auth implementation
//       sessionStorage.removeItem('authToken');
      
//       // Reset user states
//       setUser(null);
//       setUsername('');
//       setPassword('');
//       setError('');

//       // Navigate to the login page or home page
//       navigate('/');
//     } catch (err) {
//       setError('Error logging out');
//     }
//   };

//   return (
//     <div className="w-full overscroll-x-none md:w-16 md:h-screen bg-gray-900 p-2 flex md:flex-col items-center justify-between md:justify-start md:space-y-4 fixed bottom-0 md:relative md:bottom-auto">
//       {/* Admin Dashboard */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/admin" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <LayoutDashboard size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Admin Dashboard
//         </div>
//       </div>

//       {/* User Details */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/user-details" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Users size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           User Details
//         </div>
//       </div>

//       {/* Agent Details */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/agent-details" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Landmark size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Agent Details
//         </div>
//       </div>

//       {/* Cards Issued */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/cards-issued" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Club size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Cards Issued
//         </div>
//       </div>



//       <div className="relative inline-block group flex items-center">
//         <Link to="/cards-issued" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Club size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//          Logout
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default AdminSide;

















// import React from 'react';
// import { Users, Landmark, Club,LogOut, LayoutDashboard } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// const AdminSide = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     try {
//       localStorage.removeItem('authToken'); // Clear auth token
//       sessionStorage.removeItem('authToken');

//       // Navigate to the login page or home page
//       navigate('/');
//     } catch (err) {
//       console.error('Error logging out', err);
//     }
//   };

//   return (
//     <div className="w-full overscroll-x-none md:w-16 md:h-screen bg-gray-900 p-2 flex md:flex-col items-center justify-between md:justify-start md:space-y-4 fixed bottom-0 md:relative md:bottom-auto">
//       {/* Admin Dashboard */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/admin" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <LayoutDashboard size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Admin Dashboard
//         </div>
//       </div>

//       {/* User Details */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/user-details" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Users size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           User Details
//         </div>
//       </div>

//       {/* Agent Details */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/agent-details" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Landmark size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Agent Details
//         </div>
//       </div>

//       {/* Cards Issued */}
//       <div className="relative inline-block group flex items-center">
//         <Link to="/cards-issued" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
//           <Club size={24} className="text-white hover:text-gray-300" />
//         </Link>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Cards Issued
//         </div>
//       </div>

//       {/* Logout */}
//       <div className="relative inline-block group flex items-center">
//         <button onClick={logout} className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-red-500 cursor-pointer">
//           <LogOut size={24} className="text-white hover:text-gray-300" />
//         </button>
//         <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSide;






import React, { useState } from 'react';
import { List, Users, Landmark, Club,LogOut, LayoutDashboard } from 'lucide-react'; // Ensure correct imports
import { Link, useNavigate } from 'react-router-dom';

const AdminSide = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    try {
      // Assuming you're using tokens, clear token from localStorage or sessionStorage
      localStorage.removeItem('authToken'); // Adjust based on your auth implementation
      sessionStorage.removeItem('authToken');
      
      // Navigate to the login page or home page
      navigate('/');
    } catch (err) {
      setError('Error logging out');
    }
  };

  return (
    <div className="w-full overscroll-x-none md:w-16 md:h-screen bg-gray-900 p-2 flex md:flex-col items-center justify-between md:justify-start md:space-y-4 fixed bottom-0 md:relative md:bottom-auto">
      {/* Admin Dashboard */}
      <div className="relative inline-block group flex items-center">
        <Link to="/admin" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <LayoutDashboard size={24} className="text-white hover:text-gray-300" />
        </Link>
        <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
          Admin Dashboard
        </div>
      </div>

      {/* User Details */}
      <div className="relative inline-block group flex items-center">
        <Link to="/user-details" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <Users size={24} className="text-white hover:text-gray-300" />
        </Link>
        <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
          User Details
        </div>
      </div>

      {/* Agent Details */}
      <div className="relative inline-block group flex items-center">
        <Link to="/agent-details" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <Landmark size={24} className="text-white hover:text-gray-300" />
        </Link>
        <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
          Agent Details
        </div>
      </div>

      {/* Cards Issued */}
      <div className="relative inline-block group flex items-center">
        <Link to="/cards-issued" className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <Club size={24} className="text-white hover:text-gray-300" />
        </Link>
        <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
          Cards Issued
        </div>
      </div>

      {/* Logout */}
      <div className="relative inline-block group flex items-center">
        <button onClick={logout} className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <LogOut size={24} className="text-white hover:text-gray-300" />
        </button>
        <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
          Logout
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default AdminSide;
