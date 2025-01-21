import React from "react";
import axios from "axios";
import styled from "styled-components";
import GoogleIcon from "../assets/google.png";
import lockkey from "../assets/lockkey.png";
import eye from "../assets/eye.png";
import Logo from "../assets/logo.png";
import Remem from "../assets/remem.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState({"email": "", "password": ""})
  const navigate = useNavigate();

 
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const [responseMessage, setResponseMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { email, password };

      console.log(payload);

      const response = await axios.post(
        "https://wastewave-backend.onrender.com/api/login",
        payload
      );
      console.log(response);
      
      // const token = response.data.data.token;
      // const decodedToken = jwtDecode(token);
      // const userId = decodedToken.id; 

      const { data } = response.data;
      const token = data.token;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id; // Decode the user ID from the JWT token
      const firstName = decodedToken.firstName; // Retrieve first name if available

      console.log(decodedToken);
      
      console.log("User ID:", userId);
      console.log("First Name:", firstName);
      // const userId = response.data.data._id;
      
      navigate(`/home/${userId}`, { state: { firstName } });
      setResponseMessage(`Success: ${response.data.message}`);
    } catch (error) {
      if (error.response) {
        setResponseMessage(`Error: ${error.response.data.message}`);
      } else {
        setResponseMessage(`Error: ${error.message}`);
      }
      if (error.response) {
        setResponseMessage(`Error: ${error.response.data.message}`);
      } else {
        setResponseMessage(`Error: ${error.message}`);
      }
    }
  };
  return (
    <Anowrap>
      <LogoSec>
        <img src={Logo} alt="logo" />
        <h1>ASTE WAVE</h1>
      </LogoSec>
     
   
   <Wrapper>
        <Header>Log In</Header>
        <Label>Email address</Label>
        <InputContainer>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              onInput={handleEmailInput}
              onChange={handleEmailInput}
              autoComplete="email"
              required
            />
            {/* <p>You typed: {email}</p> */}
          </div>
        </InputContainer>

        <Label>Password</Label>
        <PasswordContainer>
          <div>
            <img id="lockkey" src={lockkey} alt=" Icon" />
            <input
              type="password"
              placeholder="Enter your password"
              onInput={handlePasswordInput}
              onChange={handlePasswordInput}
              required
            />
            <img src={eye} alt=" Icon" id="Eyecon" />
          </div>
        </PasswordContainer>

        <Remember>
          <p>Remember me</p>
          <input type="checkbox" name="" id="" />
          {/* <img src={Remem} alt="" /> */}
        </Remember>
        <Buttons to="" type="submit" onClick={handleSubmit}>
          Log In
        </Buttons>
        <GoogleButton>
          <img src={GoogleIcon} alt="Google Icon" />
          <span>Log in with Google</span>
        </GoogleButton>
        <ForgotPasswordText>
          Forgot your password? <a href="">click here</a>
        </ForgotPasswordText>

        <SignUpText>
          Don’t have an account? <a href="/signup">Sign up</a>
        </SignUpText>
        <Bysign>
          By signing up, you agree to our <br />
          <span>Terms of Service</span> and <span>Privacy Policy</span>{" "}
        </Bysign>
      
      </Wrapper>
    </Anowrap>
    
  );
};

export default LoginPage;

const LogoSec = styled.div`
  position: relative;
  width: 300px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 70px;

  @media (max-width: 450px) {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  img {
    width: 100px;
  }
  h1 {
    position: absolute;
    top: 38px;
    left: 85px;
    color: #000000;
  }
`;

const Anowrap = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  #bio {
    position: absolute;
    /* background-color: aqua;  */
    top: 230px;
    left: 250px;
  }

  #Cal {
    position: absolute;
    /* background-color: yellow; */
    top: 450px;
    left: 240px;
  }

  #cld {
    position: absolute;
    /* background-color: red; */
    top: 750px;
    left: 243px;
  }

  #Han {
    position: absolute;
    /* background-color: purple; */
    left: 930px;
    top: 550px;
  }

  #Heart {
    position: absolute;
    /* background-color: #008022; */
    bottom: 30px;
    left: 950px;
  }
 
  #Rad {
    position: absolute;
    /* background-color: #800000; */
    top: -20px;
    left: 940px;
  
  }
  #shield {
    position: absolute;
    /* background-color: #9169ff; */
    top: 426px;
    left: 955px;
  }
  #shlpls {
    position: absolute;
    /* background-color: hotpink; */
    top: 700px;
    left: 955px;
  }
`;

const Remember = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 385px;
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
input {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid blue ;
  /* outline: 3px solid #228B22; */
  
}
`

const Label = styled.p`
  margin-bottom: -10px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  color: #fff;
  text-align: left;

`

const Wrapper = styled.div`
  /* width: 574px; */
  max-width: 574px;
  height: 715px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin: auto;
  margin-top: -30px;
  justify-content: center; 
  background-color:#000000;
  padding: 40px;

  @media(max-width: 450px){
       width: 100%;
      margin-top: 20px;
      padding: 10px;
      border-radius: 25px;
  }
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
const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: transparent;
  width: 374px;
  height: 63px;
  gap: 0px;
  border-radius: 35px;
  border: 2px solid white;
  opacity: 0px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background-color: #228822; 
 
  }

  @media (max-width: 760px) {
    width: 70%;
  }
`;
const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
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

  &:hover {
    background-color: #228822;
    color: #f5f5f5;
    border-color: #e0e0e0;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }

  @media (max-width: 450px) {
    width: 300px;
    border-radius: 30px;
    /* margin-top: -15px; */
  }
  @media (max-width: 380px) {
    width: 280px;
    border-radius: 15px;
    /* margin-top: -15px; */
  }
`;

const ForgotPasswordText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  color: #fff;
  cursor: pointer;

  a {
    color: #228822;
    text-decoration: none;
  }
`;

const SignUpText = styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 15.13px;
letter-spacing: 0.05em;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #fff;



  a {
    color: #228822;
    text-decoration: none;

    &:hover {
      color: blue;
    }
  }
`;

const Bysign = styled.h5`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 15.13px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #228822;

  &:hover {
    color: blue;
  }
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

        @media(max-width: 760px){
          width: 90vw;
          /* border: 5px solid red; */
        }
    }
  
`;
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

            /* @media (max-width: 760px) {
              right: 20px;
            } */
            @media (max-width: 760px) {
              left: 87%;
            }
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

        @media(max-width: 760px){
          width: 90vw;
          /* border: 5px solid red; */
        }
}
`