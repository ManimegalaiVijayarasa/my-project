import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <img src="/logo.png" alt="Logo" className="home-logo" />

      <h1 className="home-title">🎓 Welcome to the Course Registration System</h1>
      <p className="home-subtext">Register for your favorite courses in just a few clicks. Fast, colorful, and easy!</p>

      <button className="home-button" onClick={() => navigate('/login')}>
        Go to Login
      </button>

      <footer className="home-footer">
        © {new Date().getFullYear()} Course Registration System. All rights reserved.
      </footer>


    </div>
  );
};

export default HomePage;
