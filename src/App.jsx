import { useState } from 'react'
import './App.css'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import HomeDMX from './components/Home'
import DashboardAST from './pages/DashboardAST';
import ScheduleAST from './pages/ScheduleAST' ;
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import UserSelectMenu from './components/UserselectMenu';
import LoginPage from './components/LoginPage';
import SignUpProps from './Reusables/SignupProps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import LandingPage from './pages/LandingPageDAMI'
import Header from './components/Header'
import Body from './components/Body'
import Address from './components/Address'
import Newcard from './components/Newcard'
import Transactions from './components/Transactions'
import Payment from './components/Payment'
import Trash from './components/Trash'
import History from './components/History'

const app = () => {
  return ( 
  <div>
    <Router>
    <Routes>
      {/* <Route path='/' element={ <Landing/>}/>  */}
      <Route path='/UserSelectMenu' element={ <UserSelectMenu/>}/>
      <Route path='/SignUpProps' element={ <SignUpProps/>}/>
      <Route path='LoginPage' element={ <LoginPage/>}/>
      <Route path='/' element={<HomeDMX />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<AboutDMX/>}/>
      <Route path='/address' element={<AddressDMX/>}/>
      {/* <Route path='/' element={<LandingPage/>}/> */}
      <Route path='/DashboardAST' element={<DashboardAST />}/>
      <Route path='/ScheduleAST' element={<ScheduleAST />}/>
      {/* <Header />
      <Body />
      <Header />
      <Address />
      <Header />
      <Newcard />
      <Transactions />
      <Payment />
      <NavBarDMX />
      <Trash />
      <History />
      <NavBarDMX /> */}
    </Routes>
    </Router>
    </div> 
   );
  }


export default app;