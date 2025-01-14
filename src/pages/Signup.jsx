import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIconImg from "../assets/google.png";
import eye from '../assets/eye.png';
import lockkey from '../assets/Lockkey.png';
import Eyeslash from '../assets/Eyeslash.png';
import {TiTick} from "react-icons/ti";
import Biohazard from '../assets/Biohazard.png';
import Calenda from '../assets/Calenda.png';
import Calendar from '../assets/Calendar.png';
import HandHear from '../assets/HandHear.png';
import HandHeart from '../assets/HandHeart.png';
import Radioactive from '../assets/Radioactive.png';
import Shieldplus from '../assets/Shieldplus.png';
import Shieldplu from '../assets/Shieldplu.png';
import NavHeader from "../components/Header";
import CustomAlertDMX from "../components/CustomAlertDMX";

const SignUpProps = ({GoogleIcon = GoogleIconImg,  Title}) => {
  const toggleSave = ()=> {
    const alertBox = document.getElementById("popUp")
    alertBox.style.display = "flex"
    console.log(alertBox);  
}
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");
const [isAlertVisible, setIsAlertVisible] = useState(false);
const [responseMessage, setResponseMessage] = useState("");
const [showPassword, setShowPassword] = useState(false);  

  const handleEmailInput = (e)=> {
    setEmail(e.target.value)
    console.log(email)
  }
  const handlePasswordInput = (e)=> {
    setPassword(e.target.value)
    console.log(password)
  }
  const handleConfirmPasswordInput = (e)=> {
    setConfirmPassword(e.target.value)
    console.log(confirmPassword)
  }
  

const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    setResponseMessage("Passwords do not match");
    return;
  }

  toggleSave()
  try {
    const response = await axios.post("https://wastewave-backend.onrender.com/api/register", {
      email,
      password,
    });
    console.log(email, password);
    
    setResponseMessage(`Success: ${response.data.message}`);
  } catch (error) {
    const errorMessage = error.response?.data.message || error.message;
    setResponseMessage(`Error: ${errorMessage}`);
  }
};
  return (
    <Anotherwrapa>
      <NavHeader/>
     <img id="bio" src={Biohazard} alt="" />
     <img id="Cal" src={Calenda} alt="" />
     <img id="cld" src={Calendar} alt="" />
     <img id="Han" src={HandHear} alt="" />
     <img id="Heart" src={HandHeart} alt="" />
     <img id="Rad" src={Radioactive} alt="" />
     <img id="shield" src={Shieldplu} alt="" />
     <img id="shlpls" src={Shieldplus} alt="" />

      <SignupWrapper>
  
        <InputWrapper>
        <Header>Sign Up</Header>
          <Label>Email Address</Label>
          <InputContainer>
            <div>
                <input id="email" type="email" placeholder="Enter your email address" onInput={handleEmailInput} onChange={handleEmailInput} autoComplete="email"/>

                {/* <p>You typed: {email}</p> */}
            </div>
          </InputContainer>
       <  Password>Password </Password>
          <PasswordContainer>
            <div>
                <img id="lockkey" src={lockkey} alt=" Icon" />
                <input type="password" placeholder="Enter your password" onInput={handlePasswordInput} onChange={handlePasswordInput} />
                <img src={eye} alt=" Icon" id="Eyecon" />
            </div>
            {/* <p>You typed: {password}</p> */}
          </PasswordContainer>
          <Confirmation>Password Confirmation</Confirmation>
          <PasswordContainer>
            <div>
                <img id="lockkey" src={lockkey} alt=" Icon" />
                <input type="password" placeholder="Confirm your password" onInput={handleConfirmPasswordInput} onChange={handleConfirmPasswordInput}/>
                <img src={eye} alt=" Icon" id="Eyecon"  />
            </div>
            {/* <p>You typed: {confirmPassword}</p> */}
          </PasswordContainer>
         
          
        </InputWrapper>
        <Wrapper>
          <p>I have read the  <span>privacy policy</span>.</p>
       <h4><TiTick/></h4>
      </Wrapper>
        <SignupBtn>
          <Buttons type="submit" onClick={handleSubmit}>
            Sign Up
          </Buttons>
          <h3>OR</h3>
          <Buttons>
            <Icon>
              <img src={GoogleIcon} alt="Google Icon" />
            </Icon>
            <InsideText>{Title = "Sign up with Google"}</InsideText>
          </Buttons>
        </SignupBtn>
        {responseMessage && <p>{responseMessage}</p>}
        <Already>Already have an account? <Link to="/login" style={{textDecoration: "none"}}><span>Log In</span></Link ></Already>
        <Bysign>By signing up, you agree to our <br />
        <span >Terms of Service</span> and <span>Privacy Policy</span> </Bysign>
      </SignupWrapper>
      <CustomAlertDMX text="Sign Up Success" url="/login" btnText="Login"/>
    </Anotherwrapa>
  );
};

export default SignUpProps;
    
const SignupWrapper = styled.div`
  width: 574px;
  height: 715px;
  border-radius: 30px;
  background-color: #81B622;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #81B622;
  opacity: 0px;
  margin: auto;
  margin-top: 50px;
`

const Anotherwrapa = styled.div`
  background-color: white;

  #bio{
    position: absolute;
    top: 30px;
    left: 340px;
    
   
  }
  #Cal{
    position: absolute;
    top: 450px;
    left: 340px;
 
  }
  #cld{
    position: absolute;
    top: 790px;
    left: 343px;
  
  }
  #Han{
    position: absolute;
    left:630px ;
    top: 800px;
  }
  #Heart{
    position: absolute;
    top: -30px;
    left: 650px;
  
  }
  #Rad{
    position: absolute;
    top: -20px;
    left: 940px;
  
  }
  #shield{
    position: absolute;
    top: 426px;
    left: 955px;

  }
  #shlpls{
    position: absolute;
    top: 772px;
    left: 955px;
  
  }
`
const Header = styled.h1`
    font-family: Inter;
    font-size: 32px;
    font-weight: 900;
    line-height: 30px;
    letter-spacing: -0.04em;
    text-align: center;
    color: #FFFFFF;
    margin-top: auto;
    /* border: 2px solid yellow; */
`
const SignupBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top:10px;

  

  h3 {
    color: white;
  }

`;

const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 374px;
  height: 63px;
  gap: 0px;
  border-radius: 35px ;
  border: 2px solid white ;
  opacity: 0px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background-color: blue; 
    color: white; 
    border-color: #e0e0e0; 
  }
`;

const Icon = styled.div`
  margin-right: 0.5rem;

  img {
    width: 20px;
    height: 20px;
    margin-left: 2rem;
  }
`;

const InsideText = styled.div`
    color: white;
    width: 200px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 17.3px;
    letter-spacing: 5%;
    text-align: center;

    #signup {
      color: white;
      font-weight: 600;

 
    }
`;


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50px;
`;

const Label = styled.p`
margin-bottom: -10px;
/* border: 2px solid blue; */
font-family: Inter;
font-size: 14px;
font-weight: 800;
line-height: 25px;
text-align: left;
color: white;


  
`
const Password = styled.p`
  margin-bottom: -10px;
  /* border: 2px solid blue; */
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  color: white;
`
const Confirmation = styled.p`
  margin-bottom: -10px;
  /* border: 2px solid blue; */
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  color: white;
  `

const InputIcon = styled.div`
justify-content: space-around;
align-items: center;
height: 63px;
padding-right: 2px;
display: flex;
`;

const Input = styled.input`
  font-size: 16px;
  color: #FFFFFF80;
  background-color: transparent;
  border: none;
`;
const Wrapper = styled.div`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center; 
      margin-right: 30px;
      width: 355px;
 
  p {
      text-align: center;
      color: #FFFF;


  }
  span{

    color: blue;
  }

  h4{
    border: 2px solid blue;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    color: blue;

  
  }

 
`
const Already = styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 15.13px;
letter-spacing: 0.05em;
text-align: left;
color: #FFFF;
margin-top: 10px;

span{
  color: blue;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: left;
}

`

const Bysign = styled.h5`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
  margin-top: 10px;

 span{
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: center;
  color: blue;
  }

`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    
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
        width: 478px;
        height: 63px;
        background-color: transparent;
        padding: 0 10px 0 20px;
        margin: auto;
        margin-bottom: 5.2px;
        font-size: 15px;
        color: #FFFFFF;
        align-items: center;
        border: 2px solid #FFFFFF;
        border-radius: 15px;
    }
`
const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        position: relative;
        margin: auto;

        img {
            position: absolute;
            top: 18.72px;
            left: 15px
        }
        #Eyecon {
            left: 425px;
            /* right: 125px; */
        }
    }
    input {
        width: 478px;
        height: 62.4px;
        padding: 0 10px 0 50px;
        margin: auto;
        margin-bottom: 5.2px;
        font-size: 15px;
        color: #FFFFFF;
        align-items: center;
        border: 2px solid #FFFFFF;
        border-radius: 15px;
        background-color: transparent;
}
`
