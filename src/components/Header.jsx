import React, { useState } from "react";
import "./Header.css"; 
import logo from "../assets/images/google.png"; 

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
      <div 
        className={`hamburger ${isMenuOpen ? "close" : ""}`} 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/home" className="active">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#faqs">FAQ's</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>
      <div className="signup-btn">
        <button>SIGN UP</button>
      </div>
    </nav>
  );
};


export default Header; 
// import './Header.css'
// import arrow from '../assets/images/arrow.svg'

// const Header = () => {
//     return ( 
//         <div className='header'>

//             <div className='arrow'>
//                 <img src={arrow} alt="" />
//             </div>
            
//             <div className='words'>
//                 <p>Add Debit Card</p>
//             </div>
       

//         </div>
//     )
// }

// export default Header
