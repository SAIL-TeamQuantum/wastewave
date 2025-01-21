import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [totalAmount, setTotalAmount] = useState(450000); // Example amount in NGN kobo
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const paymentDetails = {
        amount: totalAmount * 100, // Convert to kobo
        email,
        callbackUrl: "https://wastewave-backend.onrender.com/api/paystack/verify",
      };

      const response = await axios.post("https://wastewave-backend.onrender.com/api/paystack/initialize", paymentDetails);
      console.log(response.data);
      
      // const data = await response.json();
      const { authorizationUrl } = response.data;
      console.log(authorizationUrl);
      
      const paymentWindow = window.open(authorizationUrl)
      if (paymentWindow) {
        const interval = setInterval(() => {
          if (paymentWindow.closed) {
            window.location.href = "/payment-success";
            clearInterval(interval)
          }
        }, 1000)
      } else {
        console.log("Failed to open payment window");
      }
    } catch (error) {
      if (error.response) {
        console.log(`Error: ${error.response.data.message}`); 
    } 
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Checkout</Title>
        <Label>Total Amount:</Label>
        <Amount>₦{(totalAmount / 100).toFixed(2)}</Amount>

        <Label>Email Address:</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={handleCheckout} disabled={!email || isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </Button>
      </Card>
    </Container>
  );
};

export default CheckoutPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

const Card = styled.div`
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #555;
`;

const Amount = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:disabled {
    background-color: #b3d7f4;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #2980b9;
  }
`;



// import React from "react";
// import axios from "axios";
// import styled from "styled-components";
// import Biohazard from '../assets/Biohazard.png';
// import Calenda from '../assets/Calenda.png';
// import Calendar from '../assets/Calendar.png';
// import HandHear from '../assets/HandHear.png';
// import HandHeart from '../assets/HandHeart.png';
// import Radioactive from '../assets/Radioactive.png';
// import Shieldplus from '../assets/Shieldplus.png';
// import Shieldplu from '../assets/Shieldplu.png';
// import NavHeader from "../components/Header";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; 

// const PaymentDMX = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate();

//     const handleEmailInput = (e)=> {
//       setEmail(e.target.value)
//       console.log(email)
//     }
//     const handlePasswordInput = (e)=> {
//       setPassword(e.target.value)
//       console.log(password)
//     }

//   const [responseMessage, setResponseMessage] = useState("")
//   const handleSubmit = async (e) => {
//     e.preventDefault(); 
//     try {
//         const payload = { email, password };
        
//         console.log(payload)
//         const response = await axios.post('https:/wastewave-backend.onrender.com/api/signin', payload);
//         const userId = response.data.data._id;
//         console.log(userId)
//         navigate(`/home/${userId}`);
//         setResponseMessage(`Success: ${response.data.message}`);
//     } catch (error) {
//         if (error.response) {
//             setResponseMessage(`Error: ${error.response.data.message}`); 
//         } else {
//             setResponseMessage(`Error: ${error.message}`);
//         }
//     }
//   };
//   return (
//     <Anowrap>
//       <img id="bio" src={Biohazard} alt="" />
//       <img id="Cal" src={Calenda} alt="" />
//       <img id="cld" src={Calendar} alt="" />
//       <img id="Han" src={HandHear} alt="" />
//       <img id="Heart" src={HandHeart} alt="" />
//       <img id="Rad" src={Radioactive} alt="" />
//       <img id="shield" src={Shieldplu} alt="" />
//       <img id="shlpls" src={Shieldplus} alt="" />
//       <Wrapper>
        
//           <Header>Payment</Header>
//           <Label><label htmlFor="email">Firstname</label></Label>
//           <InputContainer>
//             <div>
//                 <input id="email" type="text"  name="firstname" onInput={handleEmailInput} onChange={handleEmailInput} autoComplete="email" required/>

//                 {/* <p>You typed: {email}</p> */}
//             </div>
//           </InputContainer>
//           <Label><label htmlFor="lastname">Lastname</label></Label>
//           <InputContainer>
//             <div>
//                 <input id="email" type="text" name="lastname" onInput={handleEmailInput} onChange={handleEmailInput} autoComplete="email" required/>

//                 {/* <p>You typed: {email}</p> */}
//             </div>
//           </InputContainer>
//           <Label>Email</Label>
//           <PasswordContainer>
//             <div>
//                 <input type="email" name="email" onInput={handlePasswordInput} onChange={handlePasswordInput} required/>
//             </div>
//           </PasswordContainer>
//           <Label>Amount</Label>
//           <PasswordContainer>
//             <div>
//                 <input type="text" name="amount" onInput={handlePasswordInput} onChange={handlePasswordInput} required/>
//             </div>
//           </PasswordContainer>
//         <Buttons to="" type="submit" onClick={handleSubmit}>Log In</Buttons>
      
//       </Wrapper>
//     </Anowrap>
 
//   );
// };

// export default PaymentDMX;

// const Anowrap = styled.div`
//   background-color: white;
//   position: relative;

//   #bio{
//     position: absolute;
//     /* background-color: aqua;  */
//     top: 30px;
//     left: 340px;
    
   
//   }
//   #Cal{
//     position: absolute;
//     /* background-color: yellow; */
//     top: 450px;
//     left: 340px;
 
//   }
//   #cld{
//     position: absolute;
//     /* background-color: red; */
//     top: 750px;
//     left: 343px;
  
//   }
//   #Han{
//     position: absolute;
//     /* background-color: purple; */
//     left:630px ;
//     top: 750px;
//   }
//   #Heart{
//     position: absolute;
//     /* background-color: #008022; */
//     top: -30px;
//     left: 650px;
  
//   }
//   #Rad{
//     position: absolute;
//     /* background-color: #800000; */
//     top: -20px;
//     left: 940px;
  
//   }
//   #shield{
//     position: absolute;
//     /* background-color: #9169ff; */
//     top: 426px;
//     left: 955px;

//   }
//   #shlpls{
//     position: absolute;
//     /* background-color: hotpink; */
//     top: 700px;
//     left: 955px;
  
//   }
// `

// const Remember = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   width:  385px;
//   height: 14px;

// p{
//   font-family: Inter;
//   font-size: 15px;
//   font-weight: 400;
//   line-height: 16.21px;
//   letter-spacing: 0.05em;
//   text-align: left;
//   color: #fff;

// }
// `

// const Label = styled.p`
//   margin-bottom: -10px;
//   font-family: Inter;
//   font-size: 14px;
//   font-weight: 800;
//   line-height: 25px;
//   color: #fff;
//   text-align: left;
// `

// const Wrapper = styled.div`
//   width: 574px;
//   height: 715px;
//   border-radius: 30px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
//   gap: 1.5rem;
//   margin: auto;
//   margin-top: 50px;
//   justify-content: center; 
//   background-color:#81B622;
//   padding: 50px;

// `

// const Header = styled.h1`
//   font-family: Inter;
//   font-size: 32px;
//   font-weight: 900;
//   line-height: 30px;
//   letter-spacing: -0.04em;
//   text-align: center;
//   color: #FFFFFF;
//   /* border: 2px solid blue; */
  
// `;
// const Buttons = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   background-color: #004aad;
//   width: 374px;
//   height: 93px;
//   gap: 0px;
//   border-radius: 35px ;
//   border: none;
//   opacity: 0px;
//   cursor: pointer;
//   color: white;
//   font-weight: 700;
//   font-size: 16px;
// `

// const InputContainer = styled.div`
//     display: flex;
//     flex-direction: column;
    
//     div {
//         position: relative;
//         margin: auto;

//         img {
//             position: absolute;
//             top: 18.72px;
//             left: 15px
//         }
//     }
//     input {
//         width: 478px;
//         height: 53px;
//         background-color: transparent;
//         padding: 0 20px;
//         margin: auto;
//         margin-bottom: 5.2px;
//         font-size: 15px;
//         color: #FFFFFF;
//         align-items: center;
//         border: 2px solid #FFFFFF;
//         border-radius: 15px;
//     }
// `
// const PasswordContainer = styled.div`
//     display: flex;
//     flex-direction: column;

//     div {
//         position: relative;
//         margin: auto;

//         img {
//             position: absolute;
//             top: 18.72px;
//             left: 15px
//         }
//         #Eyecon {
//             left: 425px;
//             /* right: 125px; */
//         }
//     }
//     input {
//         width: 478px;
//         height: 53px;
//         padding: 0 20px;
//         margin: auto;
//         margin-bottom: 5.2px;
//         font-size: 15px;
//         color: #FFFFFF;
//         align-items: center;
//         border: 2px solid #FFFFFF;
//         border-radius: 15px;
//         background-color: transparent;
//     }
// `