import { useState } from 'react'
import './App.css'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import DashboardAST from './pages/DashboardAST';
import ScheduleAST from './pages/ScheduleAST' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBarDMX /> */}
      <BrowserRouter>
                <Routes>
                    <Route path='/DashboardAST' element={<DashboardAST />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/about' element={<AboutDMX/>}/>
                    <Route path='/address' element={<AddressDMX/>}/>
                    <Route path='/ScheduleAST' element={<ScheduleAST/>}/>
                </Routes>
            
      </BrowserRouter>
    </>
  )
}

export default App
