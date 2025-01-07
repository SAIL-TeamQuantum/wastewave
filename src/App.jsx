
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
    </Routes>
    </Router>
    <div>
    </div>
    </div> 
   );
}


export default app;