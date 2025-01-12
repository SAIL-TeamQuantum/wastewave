import About from "./components/About";
import Wastewave from "./components/WasteWave"

import { useState } from 'react'
import './App.css'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
// import HomeDMX from './components/Home'
import DashboardAST from './pages/DashboardAST';
import ScheduleAST from './pages/ScheduleAST' ;
import React from 'react'
import UserSelectMenu from './components/UserselectMenu';
import LoginPage from './components/LoginPage';
import Signup from './Reusables/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPageDAMI'


const app = () => {
  return ( 
  <div>
    <Router>
    <Routes>
      {/* <Route path='/' element={ <Landing/>}/>  */}
      <Route path='/userselectmenu' element={ <UserSelectMenu/>}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='login' element={ <LoginPage/>}/>
      {/* <Route path='/' element={<HomeDMX />}/> */}
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<AboutDMX/>}/>
      <Route path='/address' element={<AddressDMX/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<DashboardAST />}/>
      <Route path='/ScheduleAST' element={<ScheduleAST />}/>
    </Routes>
    </Router>
    </div> 
   );
  }


export default app;