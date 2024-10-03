

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserDashboard from './components/User/User';
import AdminDashboard from './components/Admin/Admin';
import AgentDashboard from './components/Agent/Agent';
import MaxAgentDetails from './components/Admin/MaxAgentDetails';
import UserDetails from './components/Admin/UserDetails';
import CardsIssued from './components/Admin/CardsIssued';
import AgentDetails from './components/Admin/AgentDetails';
import Login from './components/Login/Login'; // Import the Login component

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const logout = () => {
    setUser(null);
    navigate('/'); // Navigate to login page on logout
  };

  return (
    <div className="">
      {/* Check if user is logged in */}
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} /> {/* Login Page */}
        <Route path="/user" element={user ? <UserDashboard /> : <Navigate to="/" />} />
        <Route path="/agent" element={user ? <AgentDashboard /> : <Navigate to="/" />} />
        <Route path="/admin" element={user ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/max-agent-details" element={user ? <MaxAgentDetails /> : <Navigate to="/" />} />
        <Route path="/user-details" element={user ? <UserDetails /> : <Navigate to="/" />} />
        <Route path="/agent-details" element={user ? <AgentDetails /> : <Navigate to="/" />} />
        <Route path="/cards-issued" element={user ? <CardsIssued /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

     
    </div>
  );
};

// Wrap App component with Router in index.js or wherever your app is bootstrapped
const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
