import { useState } from 'react'
import './App.css'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import DashboardAST from './pages/DashboardAST'; //This one na user dashboard
import ManDashboardAST from './pages/ManDashboardAST'; //This is management dashboard
import ScheduleAST from './pages/ScheduleAST' ;
import AgencyAST from './pages/AgencyAST';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBarDMX /> */}
      <BrowserRouter>
                <Routes>
                    <Route path='/DashboardAST' element={<DashboardAST />}/>
                    <Route path='/ManDashboardAST' element={<ManDashboardAST />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/about' element={<AboutDMX/>}/>
                    <Route path='/address' element={<AddressDMX/>}/>
                    <Route path='/ScheduleAST' element={<ScheduleAST/>}/>
                    <Route path='/AgencyAST' element={<AgencyAST/>}/>
                    
                </Routes>
            
      </BrowserRouter>
    </>
  )
}

export default App
