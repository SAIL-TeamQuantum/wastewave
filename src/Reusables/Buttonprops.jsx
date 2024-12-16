import React from "react";
import styled from "styled-components";

const ButtonProps = ({ h3 }) => (
    <Buttondiv>
      <StyledHeading>{h3 || "Please Select an Option"}</StyledHeading>
      <ResidentButton>Resident</ResidentButton>
      <CompanyButton>Waste Management Company</CompanyButton>
      <AgencyButton>Waste Management Agency</AgencyButton>
    </Buttondiv>
  );
  
const Buttondiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: white;



`;

const StyledHeading = styled.h3`

font-size: 16px;
font-weight: 400;
line-height: 21.6px;
text-align: left;
/* margin-bottom: 20px; */
color: #A1A4B2;



`;

const ResidentButton = styled.button`
    background-color: #81B622;
    color: white;
    width: 374px;
    height: 63px;
    gap: 0px;
    border-radius: 38px ;
    opacity: 0px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    line-height: 21.62px;
    letter-spacing: 0.05em;
    text-align: center;
    
  &:hover {
    background-color: #0056b3;
  }
`;

const CompanyButton = styled.button`
  background-color: white;
  color: #81B622;
   width: 374px;
    height: 63px;
    gap: 0px;
    border-radius: 38px ;
    opacity: 0px;
    border: 3px solid #81B622;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 21.62px;
    letter-spacing: 0.05em;
    text-align: center;

  &:hover {
    background-color: #1e7e34;
  }
`;

const AgencyButton = styled.button`
    background-color: white;
    color: #81B622;
    width: 374px;
    height: 63px;
    gap: 0px;
    border-radius: 38px ;
    opacity: 0px;
     border: 3px solid #81B622;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    line-height: 21.62px;
    letter-spacing: 0.05em;
    text-align: center;


  &:hover {
    background-color: #e0a800;
  }
`;


export default ButtonProps;

