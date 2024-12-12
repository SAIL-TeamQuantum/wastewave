import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from 'styled-components';
import Arrow from '../assets/icons/arrowright.png'

const AccountPropsDMX = ({text, icon, width, divMargin}) => {
  return (
    <Wrapper>
        <div style={{marginLeft: divMargin}}>
            <img src={icon} style={{marginRight: width}}/>
            <p>{text}</p>
        </div>
        <img src={Arrow} alt="" />
    </Wrapper>
  )
}

export default AccountPropsDMX

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    /* gap: 29px; */
    /* border: 1px solid red; */
    margin-bottom: 29px;
    p {
        /* border: 1px solid blue; */
        font-family: Poppins;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0.03em;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

    }
    #icon {
        font-size: 25px;
        color: #81B622;
    }
    #icon2 {
        font-size: 35px;
        font-weight: 100;
        color: #868889;
    }
    div {
        display: flex;
        align-items: center;
        /* border: 1px solid green; */
        img {
            margin-right: 10px;
        }
    }
`