import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import Brewery from './components/Brewery';
import LogoutButton from './components/LogoutButton';
import './App.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="app-container">
        {token && <LogoutButton setToken={setToken} />}
        <Routes>
          <Route path="/login" element={token ? <Navigate to="/search" /> : <Login setToken={setToken} />} />
          <Route path="/signup" element={token ? <Navigate to="/search" /> : <Signup setToken={setToken} />} />
          <Route path="/search" element={token ? <Search /> : <Navigate to="/login" />} />
          <Route path="/brewery/:id" element={token ? <Brewery /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

