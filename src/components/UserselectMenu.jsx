import React from "react";
import NEWWASTE from '../assets/logo.png'
import styled from "styled-components";
import ButtonProps from "../Reusables/Buttonprops";






const UserSelectMenu = () => {
    return (
    <MenuDiv>
        <img src={NEWWASTE} alt=""/>
        <h2>Which option best describes <br /> your position in the waste  <br />management 
        chain?</h2>
        <ButtonProps/>
       
        
      
      
    </MenuDiv>);
}
 
export default UserSelectMenu;

const MenuDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 100px;

h2{
    font-weight: 500;
    font-size: 24px;
    line-height: 39.6px;
    color: #004AAD;
  
}













`

export {MenuDiv}