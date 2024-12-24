import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ButtonDMX from '../components/ButtonDMX'
import Arrow from '../assets/icons/backarrow.png'
import Address from '../assets/icons/address.png'
import City from '../assets/icons/city.png'
import State from '../assets/icons/state.png'
import Zip from '../assets/icons/zip.png'
import CustomAlertDMX from '../components/CustomAlertDMX'

const AddressDMX = () => {
    const btnStyle = {
        width: "380px",
        height: "60px",
        backgroundColor : "#81B622",
        color: "white",
        border: "none",
        fontSize: "15px",
        borderRadius: "5px",
        margin: "auto",
        // marginTop: "146.92px",
        boxShadow: "#6CC51D40 0px 3px 8px"    
    }
    const toggleSave = ()=> {
        const alertBox = document.getElementById("popUp")
        alertBox.style.display = "flex"
        console.log(alertBox);
        
    }

  return (
    <Wrapper>
        <Header>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <img src={Arrow} alt="" />
            </Link>
            <h3>Add Address</h3>
        </Header>
        <InputContainer>
                <div>
                    <img src={Address} alt="" />
                    <input type="text" placeholder='Address'/>
                </div>
                <div>
                    <img src={Zip} alt="" />
                    <input type="text" placeholder='Zip code'/>
                </div>
                <div>
                    <img src={City} alt="" />
                    <input type="number" placeholder='City'/>
                </div>
                <div>
                    <img src={State} alt="" />
                    <input type="number" placeholder='State'/>
                </div>
            </InputContainer>
            <CustomAlertDMX text="Address Saved!"/>
            <BtnContainer onClick={toggleSave}>
                <ButtonDMX text="Add Address" style={btnStyle}/>
            </BtnContainer>

    </Wrapper>
  )
}

export default AddressDMX

const Wrapper = styled.div`
    min-width: 400px;
    max-width: 700px;
    min-height: 100vh;
    margin: auto;
    background-color: #f2f3f7;
    /* border: 1px solid red; */
    position: relative;
`
const Header = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    background-color: white;
    height: 67px;
    /* border: 1px solid red; */

    img {
        width: 23.89px;
        height: 16px;
        position: relative;
        left: 25.97px;
    }

    h3 {
        text-align: center;
        margin: auto;
    }
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 42.19px;
    /* border: 1px solid red; */

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
        width: 380px;
        height: 62.4px;
        border-radius: 5px;
        border: none;
        padding: 0 10px 0 70px;
        margin: auto;
        margin-bottom: 5.2px;
        font-size: 15px;
    }
`
const BtnContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: 34px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
`