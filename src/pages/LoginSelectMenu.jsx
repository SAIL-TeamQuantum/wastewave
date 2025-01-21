import React from "react";
import styled from "styled-components";
import ButtonProps from "../Reusables/LoginButtonProps";
import Biohazard from "../assets/biohazard.png";
import Calenda from "../assets/calenda.png";
import Calendar from "../assets/calendar.png";
import HandHear from "../assets/handear.png";
import HandHeart from "../assets/handheart.png";
import Radioactive from "../assets/radioactive.png";
import Shieldplus from "../assets/shieldplus.png";
import Shieldplu from "../assets/shieldplu.png";
import Logo from "../assets/logo.png";
import NavHeader from "../components/Header";

const LoginSelectMenu = () => {
  return (
    <Cover>
      <LogoSec>
        <img src={Logo} alt="logo" />
        <h1> ASTE WAVE</h1>
      </LogoSec>

      {/* <img id="bio" src={Biohazard} alt="" />
      <img id="Cal" src={Calenda} alt="" />
      <img id="cld" src={Calendar} alt="" />
      <img id="Han" src={HandHear} alt="" />
      <img id="Heart" src={HandHeart} alt="" />
      <img id="Rad" src={Radioactive} alt="" />
      <img id="shield" src={Shieldplu} alt="" />
      <img id="shlpls" src={Shieldplus} alt="" /> */}

      <MenuDiv>
        <h2>
          Which option best describes your position in the{" "}
          <span> waste management chain? </span>
        </h2>

        <ButtonProps />
      </MenuDiv>
    </Cover>
  );
};

export default LoginSelectMenu;

const LogoSec = styled.div`
  position: relative;
  width: 300px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;

  @media (max-width: 450px) {
    margin-top: 40px;
    /* margin-bottom: 90px; */
    margin: auto;
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

const Cover = styled.div`
  background-color: white;
  margin-top: 40px;
  margin-bottom: 40px;

  #bio {
    position: absolute;
    top: 120px;
    left: 350px;
  }
  #Cal {
    position: absolute;
    /* background-color: yellow; */
    top: 450px;
    left: 340px;
  }
  #cld {
    position: absolute;
    /* background-color: red; */
    top: 790px;
    left: 343px;
  }
  #Han {
    position: absolute;
    /* background-color: purple; */
    left: 630px;
    top: 820px;
  }
  #Heart {
    position: absolute;
    background-color: #008022;
    top: -30px;
    left: 650px;
  }
  #Rad {
    position: absolute;
    /* background-color: #800000; */
    top: 70px;
    left: 950px;
  }
  #shield {
    position: absolute;
    /* background-color: #9169ff; */
    top: 426px;
    left: 965px;
  }
  #shlpls {
    position: absolute;
    /* background-color: hotpink; */
    top: 772px;
    left: 965px;
  }
`;

const MenuDiv = styled.div`
  width: 574px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  background-color: #000;
  border-radius: 30px;
  padding: 50px 0px;
  h2 {
    width: 400px;
    height: 51px;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    padding: 0px 10px;
    margin-bottom: 5rem;
    text-align: center;
    /* margin-bottom: 200px; */
    @media (max-width: 630px) {
      font-size: 12px;
    }
  }

  span {
    text-align: center;
    justify-content: center;
    display: flex;
  }

  @media (max-width: 630px) {
    width: 90vw;
    margin-top: 50px;
  }
`;
