import React from "react";
import styled from "styled-components";
import GoogleIcon from "../assets/google.png"; 
import Remem from '../assets/remem.png'
import Biohazard from '../assets/Biohazard.png';
import Calenda from '../assets/Calenda.png';
import Calendar from '../assets/Calendar.png';
import HandHear from '../assets/HandHear.png';
import HandHeart from '../assets/HandHeart.png';
import Radioactive from '../assets/Radioactive.png';
import Shieldplus from '../assets/Shieldplus.png';
import Shieldplu from '../assets/Shieldplu.png';

const LoginPage = () => {
  return (
    <Anowrap>
      <img id="bio" src={Biohazard} alt="" />
     <img id="Cal" src={Calenda} alt="" />
     <img id="cld" src={Calendar} alt="" />
     <img id="Han" src={HandHear} alt="" />
     <img id="Heart" src={HandHeart} alt="" />
     <img id="Rad" src={Radioactive} alt="" />
     <img id="shield" src={Shieldplu} alt="" />
     <img id="shlpls" src={Shieldplus} alt="" />
      <Wrapper>
        
      <InputWrapper>
      <Header>Log In</Header>
          <Label>email address</Label>
          <InputField  type="email" placeholder="Enter Your Email Address" />
          <Password>Password </Password>
          <InputField  type="password" placeholder=" Enter Your Password" />
        </InputWrapper>
        <Remember>
          <p>Remember me</p>
          <img src={Remem} alt="" />
        </Remember>
        <GoogleButton>
          <img src={GoogleIcon} alt="Google Icon" />
          <span>Log in with Google</span>
        </GoogleButton>
        <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
      
        <SignUpText>
          Don’t have an account? <a href="/signup">Sign up</a>
        </SignUpText>
        <Bysign>By signing up, you agree to our <br />
        <span >Terms of Service</span> and <span>Privacy Policy</span> </Bysign>
      </Wrapper>
    </Anowrap>
 
  );
};

export default LoginPage;

const Anowrap = styled.div`
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


const Remember = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width:  385px;
  height: 14px;

p{
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 16.21px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #fff;

}
`

const Label = styled.p`
  /* border: 2px solid red; */
  margin-bottom: -10px;
  margin-left: 10px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #fff;

`
const Password = styled.p`
  /* border: 2px solid yellow; */
  margin-bottom: -15px;
  margin-left: 10px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #fff;

  

`


const Wrapper = styled.div`
  margin-top: 100px;
  width: 574px;
  height: 715px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: auto;
  margin-top: 100px;
  justify-content: center; 
  background-color:#81B622
  
  

`;

const Header = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: -0.04em;
  text-align: center;
  color: #FFFFFF;
  /* border: 2px solid blue; */
  
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  gap: 3rem;
  width: 374px;
  height: 63px;
  border-radius: 35px;
  font-size: 14px;
  font-weight: 400;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: center;
  border: 2px solid white;
  color: #fff;
  background-color: transparent;

  img {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }




`;


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 
`;

const InputField = styled.input`
width: 374px;
height: 63px;
gap: 0px;
border: none;
border-radius: 35px;
opacity: 0px;
background-color: transparent;
border: 2px solid white;
align-items: center;
font-family: Montserrat;
border-radius: 35px;
font-size: 14px;
font-weight: 400;
line-height: 15.13px;
letter-spacing: 0.05em;
padding-left: 20px;
`;


const ForgotPasswordText = styled.p`
  /* width: 280px;
  height: 20px; */
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  /* border: 2px solid yellow; */
  color: #fff;
  cursor: pointer;

`;

const SignUpText = styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 15.13px;
letter-spacing: 0.05em;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #fff;



  a {
    color: #0056b3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #0056b3;
    }
  }
`;

const Bysign = styled.h5`
font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;

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