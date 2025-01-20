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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBarDMX /> */}
      <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeDMX />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/about' element={<AboutDMX/>}/>
                    <Route path='/address' element={<AddressDMX/>}/>
                </Routes>
            
      </BrowserRouter>
    </>
  )
}

export default App
