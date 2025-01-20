import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.png"
import Biohazard from '../assets/biohazard.png';
import Calenda from '../assets/calenda.png';
import Calendar from '../assets/calendar.png';
import HandHear from '../assets/handear.png';
import HandHeart from '../assets/handheart.png';
import Radioactive from '../assets/radioactive.png';
import Shieldplus from '../assets/shieldplus.png';
import Shieldplu from '../assets/shieldplu.png';
import axios from 'axios'
import { useNavigate } from "react-router-dom"; 


const VerificationDMX = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const navigate = useNavigate();
  const inputs = useRef([]);
  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }

    // Move focus to previous input on backspace
    if (value === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move focus to previous input on backspace if current input is empty
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const userId = JSON.parse(sessionStorage.getItem('user_id'))
  console.log(userId.userId)
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpString = otp.join(''); // Convert the array into a single string

    if (otpString.length < length) {
        alert("Please complete the OTP");
        return;
    }

    if (!userId) {
        alert("User ID is missing. Please try again.");
        return;
    }

    console.log("userId:", userId); // Debugging
    console.log("otpString:", otpString); // Debugging

    try {
        const response = await axios.post(
            "https://wastewave-backend.onrender.com/api/verifyotp",
            {
                userId: userId.userId,
                otp: otpString,
            }
        );

        console.log("Response:", response.data); // Debugging

        if (response.data.status === "VERIFIED") {
            alert("OTP Verified Successfully");
            navigate("/login"); // Redirect after success
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error("Error details:", error.response || error.message); // Debugging
        alert(
            error.response?.data?.message ||
            "An error occurred while verifying OTP. Please try again."
        );
    }
};


  return (
    <Wrapper>
        <LogoSec>
            <img  src={Logo} alt="logo" />
            <h1>ASTE WAVE</h1>
        </LogoSec>
        {/* <img id="bio" src={Biohazard} alt="" />
        <img id="Cal" src={Calenda} alt="" />
        <img id="cld" src={Calendar} alt="" />
        <img id="Han" src={HandHear} alt="" />
        <img id="Heart" src={HandHeart} alt="" />
        <img id="Rad" src={Radioactive} alt="" />
        <img id="shield" src={Shieldplu} alt="" />
        <img id="shlpls" src={Shieldplus} alt="" /> */}

        <Container>
          <p>Please enter the 6-digit code sent to <b>{`${userId.email}`}</b></p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {otp.map((_, index) => (
                    <Input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    />
                ))}
            </div>
            {/* <p>You typed: {otp}</p> */}
            <Buttons to="" type="submit" onClick={handleSubmit}>Log In</Buttons>
        </Container>
    </Wrapper>
  );
}

export default VerificationDMX

const Wrapper = styled.div`
    background-color: white;
    position: relative;

    #bio{
        position: absolute;
        /* background-color: aqua;  */
        top: 30px;
        left: 340px;
        
    
    }
    #Cal{
        position: absolute;
        /* background-color: yellow; */
        top: 450px;
        left: 340px;
    
    }
    #cld{
        position: absolute;
        /* background-color: red; */
        top: 750px;
        left: 343px;
    
    }
    #Han{
        position: absolute;
        /* background-color: purple; */
        left:630px ;
        top: 750px;
    }
    #Heart{
        position: absolute;
        /* background-color: #008022; */
        top: -30px;
        left: 650px;
    
    }
    #Rad{
        position: absolute;
        /* background-color: #800000; */
        top: -20px;
        left: 940px;
    
    }
    #shield{
        position: absolute;
        /* background-color: #9169ff; */
        top: 426px;
        left: 955px;

    }
    #shlpls{
        position: absolute;
        /* background-color: hotpink; */
        top: 700px;
        left: 955px;
    
    }
`

const LogoSec = styled.div`
  
    position: relative;
    width: 300px;
    margin: auto;
    margin-top: 60px;

    img {
        width: 100px;
    }

    h1 {
    
        position: absolute;
        top: 40px;
        left: 80px;
        color: #000;
}
`
const Container = styled.div`
    width: 574px;
    height: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    margin: auto;
    margin-top: 30px;
    justify-content: center; 
    background-color:#000;
    padding: 40px;
    color: white;
    text-align: center;

    @media(max-width: 450px){
        width: 100%;
        margin-top: 20px;
        padding-top: 50px;
        /* padding: 10px; */
        border-radius: 25px;
    }
`
const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: transparent;
  width: 374px;
  height: 63px;
  border-radius: 35px ;
  border: 2px solid white ;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin-top: 60px;

  &:hover {
    background-color: #228b22; 
 
  }

  @media (max-width: 760px) {
    width: 70vw;
  }
`;
const Input = styled.input`
    width: 80px;
    height: 80px;
    margin: 0 5px;
    text-align: center;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 60px;

    @media (max-width: 450px) {
        width: 40px;
        height: 40px;
    }
`;