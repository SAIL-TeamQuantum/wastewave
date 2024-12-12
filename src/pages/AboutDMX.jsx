import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Arrow from '../assets/icons/backarrow.png'
import Group from '../assets/icons/group.png'
import Mail from '../assets/icons/mail.png'
import Phone from '../assets/icons/phone.png'
import Lock from '../assets/icons/lock.png'
import Eye from '../assets/icons/eye.png'
import ButtonDMX from '../components/ButtonDMX'
import CustomAlertDMX from '../components/CustomAlertDMX'

const AboutDMX = () => {

    const btnStyle = {
        width: "380px",
        height: "60px",
        backgroundColor : "#81B622",
        color: "white",
        border: "none",
        fontSize: "15px",
        borderRadius: "5px",
        margin: "auto",
        marginTop: "146.92px",
        boxShadow: "#6CC51D40 0px 3px 8px"    
    }
    const toggleSave = ()=> {
        const alertBox = document.getElementById("popUp")
        alertBox.style.display = "flex"
        console.log(alertBox);
        
    }
  return (
    <Wrapper>
        <Header>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <img src={Arrow} alt="" />
            </Link>
            <h3>About me</h3>
        </Header>
        <Container>
            <h3 style={{paddingLeft: "16px"}}>Personal Details</h3>
            <InputContainer>
                <div>
                    <img src={Group} alt="" />
                    <input type="text" placeholder='Abayomi Chukwuemeka'/>
                </div>
                <div>
                    <img src={Mail} alt="" />
                    <input type="text" placeholder='chukuemeka@gmail.com'/>
                </div>
                <div>
                    <img src={Phone} alt="" />
                    <input type="number" placeholder='+234 907 045 0693'/>
                </div>

            </InputContainer>
            <h3 style={{marginTop: "36.65px", paddingLeft: "16px"}}>Change Password</h3>
            <PasswordContainer>
                <div>
                    <img src={Lock} alt="" />
                    <input type="password" placeholder='Current password'/>
                </div>
                <div>
                    <img src={Lock} alt="" />
                    <input type="password" placeholder='Enter new password'/>
                    <img id="Eyecon" src={Eye} alt="" />
                </div>
                <div>
                    <img src={Lock} alt="" />
                    <input type="password" placeholder='Confirm password'/>
                </div>

            </PasswordContainer>
        </Container>
        <CustomAlertDMX text="Details Saved!"/>

        <BtnContainer onClick={toggleSave}>
            <ButtonDMX  text="Save details" style={btnStyle}/>
        </BtnContainer>
    </Wrapper>
  )
}

export default AboutDMX

const Wrapper = styled.div`
    min-width: 400px;
    max-width: 700px;
    min-height: 100vh;
    margin: auto;
    background-color: #f2f3f7;
`
const Header = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    background-color: white;
    height: 67px;
    /* border: 1px solid red; */

    img {
        width: 23.89px;
        height: 16px;
        position: relative;
        left: 25.97px;
    }

    h3 {
        text-align: center;
        margin: auto;
    }
`
const Container = styled.div`
    margin-top: 34px;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20.71px;
    /* border: 1px solid red; */

    div {
        position: relative;
        margin: auto;

        img {
            position: absolute;
            top: 18.72px;
            left: 15px
        }
    }
    input {
        width: 380px;
        height: 62.4px;
        border-radius: 5px;
        border: none;
        padding: 0 10px 0 70px;
        margin: auto;
        margin-bottom: 5.2px;
        font-size: 15px;
    }
`
const PasswordContainer = styled.div`
display: flex;
    flex-direction: column;
    margin-top: 20.71px;
    /* border: 1px solid red; */

    div {
        position: relative;
        margin: auto;

        img {
            position: absolute;
            top: 18.72px;
            left: 15px
        }
        #Eyecon {
            left: 335px;
            /* right: 125px; */
        }
    }
    input {
        width: 380px;
        height: 62.4px;
        border-radius: 5px;
        border: none;
        padding: 0 10px 0 70px;
        margin: auto;
        margin-bottom: 5.2px;
        font-size: 15px;
    }
`
const BtnContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    bottom: 34px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
`