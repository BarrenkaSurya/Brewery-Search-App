import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setToken }) => {
  const navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;