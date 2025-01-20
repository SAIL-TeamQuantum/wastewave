import React, { useState } from "react";
import styled from "styled-components";
import { FaPlusCircle, FaMinusCircle  } from "react-icons/fa";


const FaqProps = ({ head, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => setIsOpen(!isOpen);

    return (
        <FaqPropsDiv>
            <section id="faqwrap">
                <div className="faqhead" onClick={toggleContent}>
                    <h4>
                        {head}
                    </h4>
                    {isOpen ? (
                        <p>
                            <FaMinusCircle />       
                        </p>
                    ) : (
                        <p>
                            <FaPlusCircle  />
                        </p>
                    )}
                </div>
                {isOpen && (
                    <div className="faqcontent">
                        <p>{content}</p>
                    </div>
                )}
            </section>
        </FaqPropsDiv>
    );
};

export default FaqProps;

const FaqPropsDiv = styled.div`
    width: 550px;
    padding: 5px ;
    margin: 5px 0px;
    border-bottom: 2px solid #228822;
    color: #000000;

    &:hover {
        color: #228822;
      }

    @media (max-width:500px){
        font-size: 16px;
    }
    
    .faqcontent {
        max-width: 450px;
        font-size: 16px;
    }
    .faqhead {
        display: flex;
        justify-content: center;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
    }
    @media (max-width:768px){
        width: 500px;
    }
    @media (max-width:500px){
        width: 300px;
   
    }
`;