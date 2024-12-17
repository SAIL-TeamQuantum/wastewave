import React, { useState } from "react";
import "./Header.css"; 
import logo from "../assets/images/W2 STAND ALONE LOGO 3.png"; 

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
     };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
       {/* Hamburger Menu */}
       <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" className="active">
            HOME
          </a>
          {/* <span className="underline"></span> */}
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#faqs">FAQ's</a>
        </li>
        <li>
          <a href="#contact">CONTACT US</a>
        </li>
        
      </ul>
      <div className="signup-btn">
        <button>SIGN UP</button>
      </div>
    </nav>
  );
};

export default Header; 
