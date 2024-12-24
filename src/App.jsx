import { useState } from 'react'
import Home from './pages/HomeDMX'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBarDMX from './static/NavBarDMX'
import Profile from './pages/ProfileDMX'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import ScheduleDMX from './pages/ScheduleDMX'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBarDMX /> */}
      <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/about' element={<AboutDMX/>}/>
                    <Route path='/address' element={<AddressDMX/>}/>
                    <Route path='/schedule' element={<ScheduleDMX/>}/>
                </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App
