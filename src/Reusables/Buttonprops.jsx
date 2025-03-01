import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonProps = () => {
  const navigate = useNavigate() 
  return(

    <Buttondiv>
      <ResidentButton onClick={()=>navigate("/signup")}>Resident</ResidentButton>
      <CompanyButton onClick={()=>navigate("/SignupProps")}>Waste Management Company</CompanyButton>
      {/* <AgencyButton onClick={()=>navigate("/SignupProps")}>Waste Management Agency</AgencyButton> */}
    </Buttondiv>
      )
    };
  
const Buttondiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

;
const ResidentButton = styled.button`
    background-color: #000;
    color: white;
    width: 388px;
    height: 70px;
    gap: 0px;
    border-radius: 20px ;
    opacity: 0px;
    border: 2px solid white;
    border-color: #FFFFFF;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: center;
    margin-bottom: 2rem;

    &:hover {
    background-color: #228822; 

  }

  @media (max-width: 630px) {
    width: 70vw;
  }
`;

const CompanyButton = styled.button`
    color:#FFFFFF;
    background-color: #000;
    width: 388px;
    height: 70px;
    gap: 0px;
    border-radius: 20px ;
    opacity: 0px;
    border: 2px solid white;
    border-color: #FFFFFF;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 21.62px;
    letter-spacing: 0.05em;
    text-align: center;
    /* margin-bottom: 50px; */

    &:hover {
    background-color: #228822; 

  }
  @media (max-width: 630px) {
    width: 70vw;
    font-size: 18px;
  }

`;

const AgencyButton = styled.button`
     color:#FFFFFF;
      background-color: #81B622;
      width: 388px;
      height: 70px;
      gap: 0px;
      border-radius: 20px ;
      opacity: 0px;
      border: 2px solid white;
      border-color: #FFFFFF;
      cursor: pointer;
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 600;
      line-height: 21.62px;
      letter-spacing: 0.05em;
      text-align: center;

      &:hover {
    background-color: blue;
  }

`;


export default ButtonProps;

