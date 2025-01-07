import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBarDMX from './static/NavBarDMX'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import HomeDMX from './pages/HomeDMX'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import UserSelectMenu from './components/UserselectMenu';
import LoginPage from './components/LoginPage';
import SignUpProps from './Reusables/SignupProps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';

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
    </Routes>
    </Router>
    </div> 
   );
}
export default app;