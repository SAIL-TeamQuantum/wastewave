import { useState } from 'react'
import './App.css'
import Profile from '../src/pages/LandingPageDAMI'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import DashboardAST from './pages/DashboardAST'; //This one na user dashboard
import AgencyAst from './pages/AgencyAST'; //This is management dashboard
import ScheduleAST from './pages/ScheduleAST' ;
import React from 'react'
import UserSelectMenu from './pages/UserselectMenu';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPageDAMI'
import PaymentDMX from '../src/pages/PaymentDMX'
import Success from "./pages/Success";
import VerificationDMX from "./pages/VerificationDMX"

const app = () => {
  return ( 
  <div>
  
    <Router>
      <Routes>
        <Route path='/userselectmenu' element={ <UserSelectMenu/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/verification' element={ <VerificationDMX/>}/>
        <Route path='login' element={ <LoginPage/>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/about' element={<AboutDMX/>}/>
        <Route path='/address' element={<AddressDMX/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<DashboardAST />}/>
        <Route path='/ScheduleAST' element={<ScheduleAST />}/>
        <Route path='/DashboardAST' element={<DashboardAST />}/>
        <Route path='/AgencyAst' element={<AgencyAst />}/>   
        <Route path='/payment' element={<PaymentDMX />}/>   
        <Route path='payment-success' element={<Success />}/>   
      </Routes>
    </Router>
    {/* <h1>boy</h1> */}
    </div> 
   );
  }


export default app;