import React from "react";
import styled from "styled-components";
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

const SignUpProps = ({
  GoogleIcon = GoogleIconImg,  Title = "Sign up with Google",
}) => {
  return (
    
    <Anotherwrapa>
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
          <Label>email</Label>
          <InputContainer>
            <InputIcon>
            <Input  type="email" placeholder="Enter your email address" />
            </InputIcon>
          </InputContainer>
       <Password>Password </Password>
          <InputContainer>
            <InputIcon>
            <img id="lockkey" src={lockkey} alt=" Icon" />
            <Input type="password" placeholder="Enter your password" />
              <img src={eye} alt=" Icon" />
            </InputIcon>
          </InputContainer>
         <Confirmation>Password Confirmation</Confirmation>
          <InputContainer>
            <InputIcon>
            <img src={lockkey} alt=" Icon" />
            <Input type="confirm password" placeholder="Confirm your password" />
              <img src={Eyeslash} alt="Password Icon" />
            </InputIcon>
          </InputContainer>
        </InputWrapper>
        <Wrapper>
      <p>
        I have read the  <span>privacy policy</span>.</p>
       <h4><TiTick/></h4>
      </Wrapper>
        <SignupBtn>
          <Buttons>
            <Icon>
              <img src={GoogleIcon} alt="Google Icon" />
            </Icon>
            <InsideText>{Title}</InsideText>
          </Buttons>
        </SignupBtn>
        <Already>Already have an account? <span>Log In</span></Already>
        <Bysign>By signing up, you agree to our <br />
        <span >Terms of Service</span> and <span>Privacy Policy</span> </Bysign>
      </SignupWrapper>
    </Anotherwrapa>
  );
};

export default SignUpProps;
    
const SignupWrapper = styled.div`
    width: 574px;
    height: 715px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    border-radius: 30px;
    background-color: #81B622;
    opacity: 0px;
    margin: auto;
    margin-top: 100px;
`;

const Anotherwrapa = styled.div`
  background-color: #ffff;
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
    top: 790px;
    left: 343px;
  
  }
  #Han{
    position: absolute;
    /* background-color: purple; */
    left:630px ;
    top: 800px;
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

`;

const Buttons = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 374px;
  height: 63px;
  gap: 0px;
  border-radius: 35px ;
  border: 2px solid white ;
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


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  align-items: center;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
  width: 374px;
  height: 63px;

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
  
  /* img {
    width: 20px;
    height: 20px;
  } */


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
      /* justify-content: space-between;  */
      margin-right: 30px;
      width: 355px;
 
  p {
   
      color: #FFFF;


  }
  span{

    color: blue;
  }

  h4{
    border: 1px solid blue;
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