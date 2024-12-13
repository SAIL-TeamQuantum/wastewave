import React from "react";
import styled from "styled-components";
import GoogleIconImg from "../assets/google.png";

import EmailIconImg from "../assets/email.png"; 
import PasswordIconImg from "../assets/password.jpg"; 
import { TiTick } from "react-icons/ti";

const SignUpProps = ({
  GoogleIcon = GoogleIconImg,
  Title = "SIGNUP GOOGLE",
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
            {/* <img src={UserImg} alt="User Icon" /> */}
          </InputIcon>
          <Input type="text" placeholder="Isaac Diya" />
        </InputContainer>


        <InputContainer>
          <InputIcon>
            <img src={EmailIconImg} alt="Email Icon" />
          </InputIcon>
          <Input type="email" placeholder="kinikan@yahoo.com" />
        </InputContainer>

     
        <InputContainer>
          <InputIcon>
            <img src={PasswordIconImg} alt="Password Icon" />
          </InputIcon>
          <Input type="password" placeholder="*******" />
        </InputContainer>
      </InputWrapper>
      <Wrapper>
      <p>I have read the privacy policy</p>
      <img src={TiTick} alt="icon" />
    </Wrapper>

    {/* <SignInBtns>
         <Button></Button>

    </SignInBtns> */}
    </SignupWrapper>


  );
};

export default SignUpProps;

const SignInBtns = styled.div`
 display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #831b1b;

`


    
const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 374px;
    height: 63px;
    gap: 0px;
    border-radius: 15px 0px 0px 0px;
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
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;


`;

const Icon = styled.div`
  margin-right: 0.5rem;

  img {
    width: 20px;
    height: 20px;
  }
`;

const InsideText = styled.div`
/* background-color: #81B622; */
    color: black;
    width: 300px;
    /* height: 63px; */
    gap: 0px;
    border-radius: 38px ;
    opacity: 0px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    line-height: 21.62px;
    letter-spacing: 0.05em;
    text-align: center;
`;

const OutText = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
`;

const InputIcon = styled.div`
  margin-right: 0.5rem;
  display: flex;
  flex-wrap: wrap-reverse;


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

  p {
    margin: 0;
  }

  img {
    width: 16px;
    height: 16px;
  }
`