import React from 'react'
import { Link } from 'react-router-dom'
import Check from '../assets/icons/check.png'
import styled from 'styled-components'
import ButtonDMX from './ButtonDMX'

const CustomAlertDMX = ({text}) => {
    const BtnStyle = {
        width: "234px",
        height: "55px",
        border: "1px solid #81B622",
        borderRadius: "10px",
        backgroundColor: "transparent",
        color: "#81B622",
        fontSize: "20px",
        fontWeight: "700"

    }

    return (
    <Wrapper  id="popUp">
        <Container>
            <h3>{text}</h3>
            <div>
                <img src={Check} alt="" />
            </div>
            <Link to="/">
                <ButtonDMX text="Back to Account" style={BtnStyle}/>
            </Link>
        </Container>
    </Wrapper>
  )
}

export default CustomAlertDMX

const Wrapper = styled.div`
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`
const Container = styled.div`
    width: 279px;
    height: 328px;
    border-radius: 0 20px 20px 20px;
    background-color: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3 {
        color: #81B622;
    }
    div {
        width: 122px;
        height: 122px;
        border-radius: 61px;
        background-color: #81B622;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`