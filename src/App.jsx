import { useState } from 'react'
import './App.css'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import HomeDMX from './components/Home'
import DashboardAST from './pages/DashboardAST';
import ScheduleAST from './pages/ScheduleAST' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import UserSelectMenu from './components/UserselectMenu';
import LoginPage from './components/LoginPage';
import SignUpProps from './Reusables/SignupProps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import LandingPage from './pages/LandingPageDAMI'

const app = () => {
  return ( 
  <div>
    <Router>
    <Routes>
      <Route path='/' element={ <Landing/>}/> 
      <Route path='/UserSelectMenu' element={ <UserSelectMenu/>}/>
      <Route path='/SignUpProps' element={ <SignUpProps/>}/>
      <Route path='LoginPage' element={ <LoginPage/>}/>
      <Route path='/' element={<HomeDMX />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<AboutDMX/>}/>
      <Route path='/address' element={<AddressDMX/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/DashboardAST' element={<DashboardAST />}/>
      <Route path='/ScheduleAST' element={<ScheduleAST />}/>

    </Routes>
    </Router>
    </div> 
   );
  }


export default app;