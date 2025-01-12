import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Wlogo.svg';
import Flogo from '../assets/images/full_logo.png';

const DashboardHeaderAST = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', path: '/DashboardAST' },
    { label: 'SCHEDULE WASTE', path: '/ScheduleAST' },
    { label: 'PAY BILLS', path: '/pay-bills' },
    { label: 'CONTACT US', path: '/contact-us' },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
    <div className='flex-container header-container'>
      <img className='Wlogo' src={Logo} alt="logo" />
      {menuItems.map((item) => (
        <h2 
          key={item.path}
          className={location.pathname === item.path ? 'active' : ''}
          onClick={() => navigate(item.path)}
          style={{ cursor: 'pointer'  }}
        >
          {item.label}
        </h2>
      ))}
      <button className='header-button'>ACCOUNT</button></div>

      <div className='header-container-mobile'>
      
      <img src={Flogo} alt="logo" />
      {/* Hamburger Button */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </button>

      {/* Mobile-Only Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Cancel Button */}
          <button className="cancel-button" onClick={closeMenu}>
          ✖
        </button>
        {menuItems.map((item) => (
          <h2
            key={item.path}
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => {
              navigate(item.path);
              closeMenu(); // Close menu after navigation
            }}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </h2>
        ))}
        <button className="Mobilebutton" onClick={closeMenu}>ACCOUNT</button>
      </div>
   
      </div>
    </div>
  );
};

export default DashboardHeaderAST;
