import React from "react";
import "./Home.css"; // Importing CSS file
import image  from "../assets/images/StartImg.png"
import image1 from "../assets/images/HandHeart.png"
import image2 from "../assets/images/Radioactive.png"
import image3 from "../assets/images/Calendar.png"
import image4 from "../assets/images/Biohazard.png"
import image5 from "../assets/images/ShieldPlus.png"

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="icons">
            <img src={image1} alt="icon" />
            <img src={image2} alt="icon" />

        </div>
        
        <h1>
          <span className="highlight-green">Fostering a cleaner environment <span><img src={image3} alt="" /></span> <br /></span>{" "}
          through <span className="highlight-blue">waste scheduling</span>
        </h1>
        <p className="description">
          We specialize in empowering businesses and individuals <br /> by connecting
          you to professionals who handle waste <br /> removal, ensuring a clean and
          healthy environment.
        </p>
        <div className="icons">
            <img src={image4} alt="" />
            <img src={image5} alt="" />
        </div>
        <button className="action-button">SEE HOW IT WORKS</button>
      </div>
      <div className="image-container">
        <img src={image} alt="Waste Scheduling Illustration" />
      </div>
    </div>
  );
};

export default Home;
