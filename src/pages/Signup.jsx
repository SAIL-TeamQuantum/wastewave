import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Ensure correct import
import GoogleIconImg from "../assets/google.png";
import eye from "../assets/eye.png";
import lockkey from "../assets/lockkey.png";
import { TiTick } from "react-icons/ti";
import Biohazard from "../assets/biohazard.png";
import Calenda from "../assets/calenda.png";
import Calendar from "../assets/calendar.png";
import HandHear from "../assets/handear.png";
import HandHeart from "../assets/handheart.png";
import Radioactive from "../assets/radioactive.png";
import Shieldplus from "../assets/shieldplus.png";
import Shieldplu from "../assets/shieldplu.png";
import Logo from "../assets/logo.png";
import CustomAlertDMX from "../components/CustomAlertDMX";
import { Link, useNavigate } from "react-router-dom";

const SignUpProps = ({ GoogleIcon = GoogleIconImg, Title }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, firstName: "First Name is required" }));
    } else {
      setErrors((prev) => ({ ...prev, firstName: "" }));
    }
  };

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, lastName: "Last Name is required" }));
    } else {
      setErrors((prev) => ({ ...prev, lastName: "" }));
    }
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!emailRegex.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
    } else if (!strongPasswordRegex.test(e.target.value)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Confirm Password is required" }));
    } else if (e.target.value !== password) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setResponseMessage("Please fill in all fields correctly");
      return;
    }

    try {
      // Make registration API call
      const response = await axios.post(
        "https://wastewave-backend.onrender.com/api/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      const { message, status, data } = response.data; // Extract API response data
      const saveUserId = sessionStorage.setItem(
        "user_id",
        JSON.stringify(data)
      );
      if (status !== "PENDING") {
        handleMessage(message, status); // Handle non-pending statuses (e.g., error messages)
      } else {
        // Persist temporary user data
        await temporaryUserPersist({ email, password });

        // Navigate to verification page, passing necessary data
        navigate("/verification", { email, userId: data.userId });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setResponseMessage(`Error: ${errorMessage}`);
    }
  };

  const temporaryUserPersist = async (credentials) => {
    try {
      await AsyncStorage.setItem("tempuser", JSON.stringify(credentials)); // Store credentials securely
    } catch (error) {
      console.error("Error with initial data handling:", error);
      setResponseMessage("Error saving user data. Please try again.");
    }
  };

  return (
    <Anotherwrapa>
      <LogoSec>
        <img src={Logo} alt="logo" />
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

      <SignupWrapper>
        <InputWrapper>
          <Header>Sign Up</Header>
          <Label>First Name</Label>
          <InputContainer>
            <div>
              <input
                type="text"
                placeholder="Enter First Name"
                // value={firstName}
                onInput={handleFirstNameInput}
                onChange={handleFirstNameInput}
                autoComplete="email"
              />

              {/* <p>You typed: {email}</p> */}
            </div>
            {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
          </InputContainer>
          <Label>Last Name</Label>
          <InputContainer>
            <div>
              <input
                type="text"
                placeholder="Enter Last Name"
                onInput={handleLastNameInput}
                onChange={handleLastNameInput}
                autoComplete="email"
              />

              {/* <p>You typed: {email}</p> */}
              {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
            </div>
          </InputContainer>
          <Label>Email Address</Label>
          <InputContainer>
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                onInput={handleEmailInput}
                onChange={handleEmailInput}
                autoComplete="email"
              />
            </div>
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputContainer>
          <Password>Password</Password>
          <PasswordContainer>
            <div>
              <img id="lockkey" src={lockkey} alt=" Icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onInput={handlePasswordInput}
                onChange={handlePasswordInput}
              />
              {/* <img src={eye} alt=" Icon" id="Eyecon" /> */}
              <img src={eye} alt="toggle visibility"  id="Eyecon" onClick={togglePasswordVisibility} />
              {/* {errors.password && <ErrorText>{errors.password}</ErrorText>} */}
            </div>
          </PasswordContainer>
          <Confirmation>Password Confirmation</Confirmation>
          <PasswordContainer>
            <div>
              <img id="lockkey" src={lockkey} alt=" Icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                onInput={handleConfirmPasswordInput}
                onChange={handleConfirmPasswordInput}
              />
              {/* <img src={eye} alt=" Icon" id="Eyecon" /> */}
              <img src={eye} alt="toggle visibility" id="Eyecon" onClick={togglePasswordVisibility} />
              {responseMessage && <ResponseMessage>{responseMessage}</ResponseMessage>}

            </div>
          </PasswordContainer>
        </InputWrapper>
        <Wrapper>
          <p>
            I have read the <span>privacy policy</span>.
          </p>
          <h4>
            <TiTick />
          </h4>
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
            <InsideText>{(Title = "Sign up with Google")}</InsideText>
          </Buttons>
        </SignupBtn>
        {responseMessage && <p>{responseMessage}</p>}
        <Already>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span>Log In</span>
          </Link>
        </Already>
        <Bysign>
          By signing up, you agree to our <br />
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </Bysign>
      </SignupWrapper>
      <CustomAlertDMX text="Sign Up Success" url="/login" btnText="Login" />
    </Anotherwrapa>
  );
};


export default SignUpProps;

const ErrorText = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 5px;
`;
const ResponseMessage = styled.p`
  color: green;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
  margin: 30px;
`;
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
const SignupWrapper = styled.div`
  max-width: 574px;
  height: auto;
  border-radius: 30px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  margin: auto;
  padding-bottom: 50px;

  @media (max-width: 450px) {
    width: 100%;
    padding: 20px 0px;
    border-radius: 25px;
  }
`;

const Anotherwrapa = styled.div`
  background-color: white;
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
    bottom: 20px;
    left: 240px;
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
const Header = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: -0.04em;
  text-align: center;
  color: #ffffff;
`;
const SignupBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 10px;

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
  border-radius: 35px;
  border: 2px solid white;
  opacity: 0px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background-color: #228822;
    color: white;
    border-color: #e0e0e0;
  }

  @media (max-width: 450px) {
    width: 300px;
    border-radius: 30px;
  }
  @media (max-width: 380px) {
    width: 280px;
    border-radius: 15px;
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

  @media (max-width: 450px) {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border-radius: 25px;
  }
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
`;
const Password = styled.p`
  margin-bottom: -10px;
  /* border: 2px solid blue; */
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  color: white;
`;
const Confirmation = styled.p`
  margin-bottom: -10px;
  /* border: 2px solid blue; */
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  line-height: 25px;
  text-align: left;
  color: white;
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
    color: #ffff;
  }
  span {
    color: #228822;
  }

  h4 {
    border: 2px solid white;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    color: #228822;
  }
`;
const Already = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 15.13px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #ffff;
  margin-top: 10px;

  span {
    color: #228822;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 15.13px;
    letter-spacing: 0.05em;
    text-align: left;
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
  margin-top: 10px;

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 15.13px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #228822;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: relative;
    margin: auto;

    img {
      position: absolute;
      top: 18.72px;
      left: 15px;
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
    color: #ffffff;
    align-items: center;
    border: 2px solid #ffffff;
    border-radius: 15px;

    @media (max-width: 560px) {
      width: 450px;
    }
    @media (max-width: 520px) {
      width: 420px;
    }
    @media (max-width: 450px) {
      width: 350px;
      border-radius: 10px;
    }
    @media (max-width: 380px) {
      width: 330px;
      border-radius: 10px;
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
      left: 15px;

      @media (max-width: 450px) {
        top: 22px;
      }
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
    color: #ffffff;
    align-items: center;
    border: 2px solid #ffffff;
    border-radius: 15px;
    background-color: transparent;

    @media (max-width: 560px) {
      width: 450px;
    }
    @media (max-width: 520px) {
      width: 420px;
    }
    @media (max-width: 450px) {
      width: 350px;
      border-radius: 10px;
    }
    @media (max-width: 380px) {
      width: 330px;
      border-radius: 10px;
    }
  }
`;
