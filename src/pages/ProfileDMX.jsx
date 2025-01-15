import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutDMX from './AboutDMX'
import CustomAlertDMX from '../components/CustomAlertDMX'
import ProfileImg from '../assets/images/image.png'
import AccountPropsDMX from '../components/AccountPropsDMX'
import NavBarDMX from '../static/NavBarDMX'
import ProfileIcon from '../assets/icons/profile.png'
import Transaction from '../assets/icons/transaction.png'
import Card from '../assets/icons/profile.png'
import Location from '../assets/icons/location.png'
import Scroll from '../assets/icons/scroll.png'
import Cam from '../assets/icons/cam.png'
import Privacy from '../assets/icons/privacy.png'
import SignOut from '../assets/icons/signout.png'

const Profile = () => {
    const toggleSave = ()=> {
        const alertBox = document.getElementById("popUp")
        alertBox.style.display = "flex"
        console.log(alertBox);  
    }

  return (
    <Wrapper>
        <MainContainer>
            <ImageContainer>
                <div>
                    <img src={Cam} alt="" />
                </div>
            </ImageContainer>
            <h3>Abayomi Chukwuemeka</h3>
            <h4>Account</h4>
        </MainContainer>
        <AccountContainer>
            
            <Link to="/about" style={{textDecoration: "none", color: "black"}}>
                <AccountPropsDMX text="About Me" icon={ProfileIcon} width="15px" divMargin="45px"/>
            </Link>
            <Link to="/address" style={{textDecoration: "none", color: "black"}}>
                <AccountPropsDMX text="My Address" icon={Location} width="17.51px" divMargin="48px"/>
            </Link>
            <AccountPropsDMX text="Credit Cards" icon={Card} width="15px" divMargin="45px"/>
            <AccountPropsDMX text="Transactions" icon={Transaction} width="13.99px" divMargin="44px"/>
            <AccountPropsDMX text="View trash activities" icon={Scroll} width="11px" divMargin="41px"/>
        </AccountContainer>
        <OtherHeader>
            <h4>Other</h4>
        </OtherHeader>
        <OtherContainer>
            <AccountPropsDMX text="Version" icon={Privacy} divMargin="39px"/>
            <div onClick={toggleSave}>
                <AccountPropsDMX text="Sign Out" icon={SignOut} divMargin="45px"/>
            </div>
        </OtherContainer>
        <CustomAlertDMX text="Sign Out Success"/>
        <NavBar>
            <NavBarDMX />
        </NavBar>
    </Wrapper>
    
  )
}

export default Profile

const Wrapper = styled.div`
    min-width: 400px;
    max-width: 700px;
    margin: auto;
    background-color: #f2f3f7;

    h3 {
        font-family: "Poppins", sans-serif;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 24px;
    }
    h4 {
        color: #868889;
        margin-bottom: 10px;
    }
`
const MainContainer = styled.div`
    padding: 30px 50px 0px 50px;
`
const AccountContainer = styled.div`
    background-color: white;
    /* border: 1px solid red; */
    padding: 20px 50px 10px 0px;
    text-decoration: none;
`


const ImageContainer = styled.div`
    margin: auto;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    /* border: 1px solid red; */
    background-image: url(${ProfileImg});
    background-size: contain;

    div {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background-color: #81B622;
        position: relative;
        top: 130px;
        left: 106px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 13px;        
    }
`
const OtherHeader = styled.div`
    padding: 44px 50px 10px 50px;
`
const OtherContainer = styled.div`
    background-color: white;
    padding: 20px 50px 10px 0px;
    margin-bottom: 30px;
    /* border: 1px solid red; */
`
const NavBar = styled.div`
    bottom: 0;
    position: sticky;

    @media (min-width: 500px) {
        display: none;
        /* border: 1px solid red; */
    }
`