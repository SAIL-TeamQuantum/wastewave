
import './App.css'
import NavBarDMX from './static/NavBarDMX'
import Profile from './pages/Home'
import AboutDMX from './pages/AboutDMX'
import AddressDMX from './pages/AddressDMX'
import HomeDMX from './pages/HomeDMX'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Address from './components/Address'
import Newcard from './components/Newcard'
import Transactions from './components/Transactions'
import Payment from './components/Payment'
import Trash from './components/Trash'
import History from './components/History'
function App() {

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
      <Header />
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
      <NavBarDMX />
    </>
  )
}

export default App
