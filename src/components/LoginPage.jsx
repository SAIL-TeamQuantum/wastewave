import React from "react";
import styled from "styled-components";
import ArrowVector from "../assets/leftarrow.png"; 
import LogoImg from "../assets/logo.png";
import GoogleIcon from "../assets/google.png"; 

const LoginPage = () => {
  return (
    <Wrapper>
     
      <Header>
        <img id="avect" src={ArrowVector   } alt="Arrow" />
        <img id="log" src={LogoImg} alt="Logo" />
      </Header>

      <Para>
      welcome on board 
     </Para>
     
    
      <GoogleButton>
        <img src={GoogleIcon} alt="Google Icon" />
        <span>Login with Google</span>
      </GoogleButton>

      
      <AnotherText>OR login with email</AnotherText>

     
      <InputWrapper>
        <InputField id="mail" type="email" placeholder="Email Address" />
        <InputField id="pass" type="password" placeholder="Password" />
      </InputWrapper>

 
      <SignInButton>Sign In</SignInButton>


      <ForgotPasswordText>Forgot your password?</ForgotPasswordText>

    
      <SignUpText>
        You don’t have an account yet? <a href="/signup">Sign up here</a>
      </SignUpText>
    </Wrapper>
  );
};

export default LoginPage;

const Para = styled.p`
 font-family: Montserrat;
 /* margin-bottom: 200px; */
 width: 300px;
 height: 44px;
font-size: 30px;
font-weight: 700;
line-height: 40.5px;
text-align: center;
color: green;
display: flex;
border: 2px solid red;

`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  margin: auto;
  padding: 2rem 0;
  /* height: 100vh; */
  justify-content: center;
  border: 1px solid;
`;

const Header = styled.div`
  display: flex;
 
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-right: 3rem;
  margin-top: 2rem;
  /* border: 2px solid red; */

  #avect{
    /* background-color: green; */
    width: 55px;
    height: 55px;
    border: 1px solid #81B622;
    border-radius: 50%;
    margin-bottom: 4rem;
  }

 #log{
  width: 190px;
  height: 156px;
  /* margin-top: 3rem; */
  
  /* height:100px; */
  /* background-color: red; */
 }
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
 


  img {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }

  span {
    color: #333;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const AnotherText = styled.p`
 font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 15.13px;
    letter-spacing: 0.05em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

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
border: 1px solid #A1A4B2;
border-radius: 35px;
opacity: 0px;
background-color:#A1A4B2;
/* margin-left: 2rem; */



`;

const SignInButton = styled.button`
    background-color: #81B622;
    color: #fff;
    border: none;
    min-width: 374px;
    height: 63px;
    border-radius: 38px;
    font-size: 22px;
    cursor: pointer;
    font-weight: 400px;

`;

const ForgotPasswordText = styled.p`
font-family: Montserrat;
font-size: 12px;
font-weight: 400;
line-height: 12.97px;
letter-spacing: 0.05em;
text-align: center;
text-decoration-skip-ink: none;
cursor: pointer;

`;

const SignUpText = styled.p`
font-family: Montserrat;
font-size: 12px;
font-weight: 400;
line-height: 12.97px;
letter-spacing: 0.05em;
text-align: center;
text-decoration-skip-ink: none;


  a {
    color: #81B622;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #0056b3;
    }
  }
`;
