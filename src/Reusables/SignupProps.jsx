import React from "react";
import styled from "styled-components";
import GoogleIconImg from "../assets/google.png";
import UserImg from '../assets/usericonimg.png'
import EmailIconImg from "../assets/email.png"; 
import PasswordIconImg from "../assets/password.jpg"; 
import { TiTick } from "react-icons/ti";

const SignUpProps = ({
  GoogleIcon = GoogleIconImg,
  Title = "Signup Google",
  Text = "OR SIGNUP WITH EMAIL",
}) => {
  return (
    <SignupWrapper>
      <SignupBtn>
        <Buttons>
          <Icon>
            <img src={GoogleIcon} alt="Google Icon" />
          </Icon>
          <InsideText>{Title}</InsideText>
        </Buttons>
        <OutText>{Text}</OutText>
      </SignupBtn>

 
      <InputWrapper>
    
        <InputContainer>
          <InputIcon>
          <Input type="text" placeholder="Isaac Diya" />
          <img src={UserImg} alt=" Icon" />
           
          </InputIcon>
  
        </InputContainer>


        <InputContainer>
          <InputIcon>
          <Input type="email" placeholder="kinikan@yahoo.com" />
            <img src={EmailIconImg} alt="Email Icon" />
          </InputIcon>
         
        </InputContainer>

     
        <InputContainer>
          <InputIcon>
          <Input type="password" placeholder="*******" />
            <img src={PasswordIconImg} alt="Password Icon" />
          </InputIcon>
         
        </InputContainer>
      </InputWrapper>
      <Wrapper>
      <p>I have read the privacy policy</p>
     <h4><TiTick/></h4>
    </Wrapper>

      <Signinbtn>
            Sign in
      </Signinbtn>

    <Previosbtn>
        Previous
    </Previosbtn>

   

    </SignupWrapper>
    


  );
};

export default SignUpProps;

const Signinbtn = styled.button`
width: 374px;
height: 63px;
font-weight: 400;
font-size: 22px;
gap: 0px;
border-radius: 38px;
opacity: 0px;
background-color: #81B622;
color: white;
border: none;

  
`

const Previosbtn = styled.button`
width: 374px;
height: 63px;
gap: 0px;
border-radius: 38px;
opacity: 0px;
background-color: #FFFFFF;
margin-top: 20px;
color: #81B622;
border: none;



  
`

    
const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    border: 2px solid red;
  
    /* width: 374px;
    height: 63px; 
    gap: 0px;
    /* border-radius: 15px 0px 0px 0px; */
    opacity: 0px;
    margin: auto;



 
`;

const SignupBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 100px;
 
`;

const Buttons = styled.button`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  width: 374px;
  height: 63px;
  gap: 0px;
  border-radius: 35px ;
  border-color:#004AAD;
  border: 1px ;
  opacity: 0px;
    cursor: pointer;



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
/* background-color: #81B622; */
    color: #004AAD;
    width: 200px;
  
    gap: 0px;
    border-radius: 38px ;
    opacity: 0px;
    border: 2px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 17.3px;
    letter-spacing: 5%;
    text-align: center;
`;

const OutText = styled.div`
 font-family: Montserrat;
font-size: 14px;
font-weight: 400;
line-height: 15.13px;
letter-spacing: 0.05em;
text-align: center;
margin-top: 10px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* width: 100%; */
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 0.5px solid #ccc;
  border-radius: 15px;
  width: 374px;
  /* padding: 0.5rem; */
  height: 63px;
`;

const InputIcon = styled.div`
  margin-left: 100px;
  display: flex;
  
  img {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  background-color: transparent;

  &::placeholder {
    color: #aaa;
  }
`;
const Wrapper = styled.div`
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;

  /* p {
    margin: 0;
    margin-top: 0.5rem;
  } */

  img {
    width: 16px;
    height: 16px;
    margin-top: 0.5rem;
    border: 2px solid blue;
  }
`