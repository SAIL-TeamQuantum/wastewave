import React from "react";
import styled from "styled-components";
import ButtonProps from "../Reusables/Buttonprops";
import Biohazard from '../assets/Biohazard.png';
import Calenda from '../assets/Calenda.png';
import Calendar from '../assets/Calendar.png';
import HandHear from '../assets/HandHear.png';
import HandHeart from '../assets/HandHeart.png';
import Radioactive from '../assets/Radioactive.png';
import Shieldplus from '../assets/Shieldplus.png';
import Shieldplu from '../assets/Shieldplu.png';
import NavHeader from "../components/Header";



const UserSelectMenu = () => {
    return (
    <Cover>
      <NavHeader/>
    <img id="bio" src={Biohazard} alt="" />
     <img id="Cal" src={Calenda} alt="" />
     <img id="cld" src={Calendar} alt="" />
     <img id="Han" src={HandHear} alt="" />
     <img id="Heart" src={HandHeart} alt="" />
     <img id="Rad" src={Radioactive} alt="" />
     <img id="shield" src={Shieldplu} alt="" />
     <img id="shlpls" src={Shieldplus} alt="" />

        <MenuDiv>
            <h2>Which option best describes your position in the <span> waste management
            chain?  </span></h2>
           
            <ButtonProps/>
        
        </MenuDiv>
    </Cover>
    );
}
 
export default UserSelectMenu;

const Cover = styled.div`
    background-color: white;
    
    #bio{
    position: absolute;
    /* background-color: aqua;  */
    top: 120px;
    left: 350px;
    
   
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
    top: 820px;
  }
  #Heart{
    position: absolute;
    background-color: #008022;
    top: -30px;
    left: 650px;
  
  }
  #Rad{
    position: absolute;
    /* background-color: #800000; */
    top: 70px;
    left: 950px;
  
  }
  #shield{
    position: absolute;
    /* background-color: #9169ff; */
    top: 426px;
    left: 965px;

  }
  #shlpls{
    position: absolute;
    /* background-color: hotpink; */
    top: 772px;
    left: 965px;
  
  }
`



const MenuDiv = styled.div`
    width: 574px;
    height: 715px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border: none;
    position: relative;
    background-color: #81B622;
    border-radius: 30px;
    /* border: 2px solid red; */



h2{
    width: 400px;
    height: 51px;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF 
}

span{
    text-align: center;
    justify-content:center;
    display: flex;
}
`
