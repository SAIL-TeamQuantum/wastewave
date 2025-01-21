import React, { useState } from "react";
import "../assets/ASTcss/Agency.css";
import "../assets/ASTcss/AgencyMobile.css";
import full_logoagt from "../assets/images/full_logoagt.png";
import notify from "../assets/images/8.png";
import {
    FaCube,
    FaCartArrowDown,
    FaArrowUp,
    FaBusinessTime,
    FaRegSun,
    FaUserTimes,
    FaSearch,
    FaUserTie,
    FaBus,
    FaCoins,
    FaReceipt,
} from "react-icons/fa";
import YearlyStatsChart from "../components/ChartAST";
import DataTable from "../components/OrderTable";
import Setting from "../components/Settings";
import { useLocation, useParams } from "react-router-dom";

const AgencyAst = () => {
    
  const location = useLocation();
  const companyName = location.state?.companyName || "Guest";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleComponent, setVisibleComponent] = useState("dashboard"); // Default to 'dashboard'

    const handleDashboardClick = () => {
        setVisibleComponent("dashboard");
        closeMenu();
    };

    const handleOrdersClick = () => {
        setVisibleComponent("orders");
        closeMenu();
    };
    const handleSettingsClick = () => {
        setVisibleComponent("settings");
        closeMenu();
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const closeMenu = () => {
        setIsMenuOpen(false);
      };

    return (
        <div className="container">
            <div className="header">
                <div className="logosec">
                    <div className="logo">
                        <img src={full_logoagt} alt="logo" />
                    </div>
                </div>

                <div className="searchbar mobile-none">
                    <input type="text" placeholder="Search" />
                    <div className="searchbtn">
                        <FaSearch className="icn srchicn" alt="search-icon" />
                    </div>
                </div>

                <div className="message">
                    <div className="circle"></div>
                    <img src={notify} className="icn" alt="" />
                    <div className="dp mobile-none">
                        <FaUserTie  className="dpicn " alt="dp" />
                        {/* Hamburger Button */}
      
                    </div>
                    <div className="dp-mobile">
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </button></div>
       {/* Mobile-Only Side Menu */}
       <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Cancel Button */}
          <button className="cancel-button" onClick={closeMenu}>
          ✖
        </button>
        
                <div className="sidebar-content" onClick={handleDashboardClick}>
                    <FaCube className="icon" />
                    <p>Dashboard</p>
                </div>

                <div className="sidebar-content" onClick={handleOrdersClick}>
                    <FaBusinessTime className="icon" />
                    <p>Orders</p>
                </div>

                <div className="sidebar-content" onClick={handleSettingsClick}>
                    <FaRegSun className="icon" />
                    <p>Settings</p>
                </div>

                <div className="sidebar-content">
                   
                </div>
                <button className="Mobilebutton" onClick={closeMenu}>
                <p>Logout</p></button>
            
       
      </div>
                </div>
            </div>

            <div className="sidenav mobile-none">
                <div className="sidebar-content" onClick={handleDashboardClick}>
                    <FaCube className="icon" />
                    <p>Dashboard</p>
                </div>

                <div className="sidebar-content" onClick={handleOrdersClick}>
                    <FaBusinessTime className="icon" />
                    <p>Orders</p>
                </div>

                <div className="sidebar-content" onClick={handleSettingsClick}>
                    <FaRegSun className="icon" />
                    <p>Settings</p>
                </div>

                <div className="sidebar-content">
                    <FaUserTimes className="icon" />
                    <p>Logout</p>
                </div>
            </div>
           

            {visibleComponent === "dashboard" && (
                
                <div className="body-content ">
                    <div className="mobile-header">
                    <h className="body-H">WELCOME, {companyName}</h>
                    <div className="dashboard-container mobile-flex">
                        <div className="dashboard-info ">
                            <div className="icon-bar">
                                <FaBus className="icon" />
                            </div>
                            <div className="info">
                                <p>New Order</p>
                                <h className="boldP">123</h>
                                <span>
                                    <FaArrowUp /> +2.00%(30 days)
                                </span>
                            </div>
                        </div>

                        <div className="dashboard-info">
                            <div className="icon-bar">
                                <FaCartArrowDown className="icon" />
                            </div>
                            <div className="info">
                                <p>Total Order</p>
                                <h className="boldP">123</h>
                                <span>
                                    <FaArrowUp /> +2.00%(30 days)
                                </span>
                            </div>
                        </div>

                        <div className="dashboard-info">
                            <div className="icon-bar">
                                <FaCoins className="icon" />
                            </div>
                            <div className="info">
                                <p>Total Order Amount</p>
                                <h className="boldP">123</h>
                                <span>
                                    <FaArrowUp /> +2.00%(30 days)
                                </span>
                            </div>
                        </div>

                        <div className="dashboard-info">
                            <div className="icon-bar">
                                <FaReceipt className="icon" />
                            </div>
                            <div className="info">
                                <p>Average Order</p>
                                <h className="boldP">123</h>
                                <span>
                                    <FaArrowUp /> +2.00%(30 days)
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="chart-container">
                        <YearlyStatsChart />
                    </div>
                </div>
            )}

            {visibleComponent === "orders" && <DataTable />}
            {visibleComponent === "settings" && <Setting />}
        </div>
        
    );
};

export default AgencyAst;
