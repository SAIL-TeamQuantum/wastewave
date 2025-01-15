import React from "react";
import "./Hero.css"; 
import image  from "../assets/images/StartImg.png"
import image1 from "../assets/images/HandHeart.png"
import image2 from "../assets/images/Radioactive.png"
import image3 from "../assets/images/Calendar.png"
import image4 from "../assets/images/Biohazard.png"
import image5 from "../assets/images/ShieldPlus.png"

const Home = () => {
  return (
    <div className="maincontainer">
      <img id="first" src={image1} alt="icon" />
            <img id="second" src={image2} alt="icon" />
            <img id="third" src={image4} alt="" />
            <img id="fourth" src={image5} alt="" />
            <img id="fifth" src={image3} alt="" />
      <div className="content">
        <h1>
          <span className="highlight-green">Fostering a cleaner environment<br /> </span>{" "}
          through <span className="highlight-blue">waste scheduling</span>
        </h1>
        <p className="description">
          We specialize in empowering businesses and individuals by connecting
          you to professionals who handle waste removal, ensuring a clean and
          healthy environment.
        </p>
    
        <button className="action-button">SEE HOW IT WORKS</button>
      </div>
      <div className="image-container">
        <img src={image} alt="Waste Scheduling Illustration" />
      </div>
    </div>
  );
};

export default Home;