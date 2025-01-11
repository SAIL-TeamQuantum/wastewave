import React from "react";
import "./WasteWave.css";
import image1 from '../image/image1.svg'
import image23 from '../image/image23.svg'
import image24 from '../image/image24.svg'


function WasteWave() {
  return (
    <div className="container">
      {/* Header Section */}
     
      {/* Circular Images Section */}
      <div className="images-section">
        <div className="circle">
          <img id='circle1' src={image1} alt="Waste Collection" />
        </div>
        <div className="circle">
          <img id='circle2'  src={image23} alt="landfill" />
        </div>
        <div className="circle">
          <img id='circle3'  src={image24} alt="wastewave" />
        </div>
      </div>

      <div className="header">
        <h1>
          We are <span className="highlight">WASTE WAVE</span>
        </h1>
      </div>


      {/* Description Section */}
      <div className="description">
        <p>
          Waste Wave is a smart waste management and scheduling app designed to <br />simplify waste disposal for residents, waste companies, and regulatory bodies <br /> like LAWMA. Our goal is to create cleaner communities by enabling timely <br /> pickups, easy payments, and real-time tracking. With Waste Wave, managing <br />waste is no longer a chore — it’s a seamless experience that keeps your <br />environment clean, healthy, and sustainable.
        </p>
      </div>
    </div>
  );
}



export default WasteWave;
