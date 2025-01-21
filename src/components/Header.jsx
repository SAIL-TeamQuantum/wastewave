import React, { useState } from "react";
import "./Header.css"; 
import logo from "../assets/images/wlogo.png"; 
import {Link} from "react-router-dom"


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
        <li><a className="active">HOME</a></li>
        <li><Link to=""><a href="">ABOUT</a></Link></li>
        <li><a href="#services">SERVICES</a></li>
        <li><Link><a href="/faqs">FAQ's</a></Link></li>
        <li><a href="#contact">CONTACT US</a></li>
        <li className="mobadd"><Link to="/loginselectmenu">LOGIN</Link></li>
        <li className="mobadd"><Link to="/userselectmenu">SIGNUP</Link></li>
      </ul>
     
      <div className="signup-btn">
      <Link id="logiin" to="/loginselectmenu"><button>LOG IN</button></Link>
        <Link to="/userselectmenu"><button>SIGN UP</button></Link>
      </div>
    </nav>
    
  );
};


export default Header; 

