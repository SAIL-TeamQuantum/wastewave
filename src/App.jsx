import About from "./components/About";
import Wastewave from "./components/WasteWave"
import { useState } from 'react'
import './App.css'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
// import HomeDMX from './components/Home'
// import DashboardAST from './pages/DashboardAST';
import DashboardAST from './pages/DashboardAST'; //This one na user dashboard
import ManDashboardAST from './pages/ManDashboardAST'; //This is management dashboard
import ScheduleAST from './pages/ScheduleAST' ;
import React from 'react'
import UserSelectMenu from './components/UserselectMenu';
import LoginPage from './components/LoginPage';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPageDAMI'





const app = () => {
  return ( 
  <div>
  
    <Router>
    <Routes>
      <Route path='/userselectmenu' element={ <UserSelectMenu/>}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='login' element={ <LoginPage/>}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<AboutDMX/>}/>
      <Route path='/address' element={<AddressDMX/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home/:id' element={<DashboardAST />}/>
      <Route path='/ScheduleAST' element={<ScheduleAST />}/>
      <Route path='/DashboardAST' element={<DashboardAST />}/>
      <Route path='/company' element={<ManDashboardAST />}/>   
    </Routes>
    </Router>
    {/* <h1>boy</h1> */}
    </div> 
   );
  }


export default app;