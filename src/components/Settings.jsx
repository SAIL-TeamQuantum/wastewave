import React, { useState } from "react";
import Cover from "../assets/images/cover.jpg";
import Profile from "../assets/images/profile.png";

const Setting = () => {
    const [charge, setCharge] = useState("15%"); 
    const [amount, setAmount] = useState("#2000");
    const [sentimentType, setSentimentType] = useState('');
    const [availablehours, setAvailablehours] = useState('');
    const [availabledays, setAvailabledays] = useState('');


  const handleSentimentTypeChange = (event) => {
    setSentimentType(event.target.value);
};
  const handleAvailablehoursChange = (event) => {
    setAvailablehours(event.target.value);
};
    const handleAvailabledaysChange = (event) => {
    setAvailabledays(event.target.value);
  };
  
    return (
        <div>
            <div className="settings-container">
                <div className="settings-Header">
                    <img className="cover-image" src={Cover} alt="cover image" />
                    <img className="profile-image" src={Profile} alt="profile image" />

                
                <div className="settings-body">
                    <div className="settings-body-header">
                        <h2>General Information</h2>
    
    <div className="settings-body-content">
        <label>Company Name</label>
        <input type="text" placeholder="Company Name" />
        <label>Company Address</label>
        <input type="text" placeholder="Address" />
        <label>City</label>
        <input type="text" placeholder="City" />
        <label>State</label>
        <input type="text" placeholder="State" />
        <label>Phone Number</label>
        <input type="text" placeholder="Phone Number" />
<label>Email</label>
        <input type="text" placeholder="Email" />
        
        <div className="button-container">
        <button type="button" className="save-btn">Save</button>
        </div>
        </div></div>

        {/* Order & Charge  */}
        <div className="settings-body-header">
                        <h2>Order & Charge</h2>
    
    <div className="settings-body-content">
    <label>Charges</label>
        <input type="text" placeholder="Company Name" value={charge}  />
        <label>Sentiment Type</label>
        <select value={sentimentType} onChange={handleSentimentTypeChange}>
          <option value="">Select a sentiment type</option>
          <option value="positive">Manual</option>
          <option value="negative">Automatic</option>
          <option value="neutral">Neutral</option>
        </select>

        <label>Available Hours</label>
        <select value={availablehours} onChange={handleAvailablehoursChange}><option value="09am">09:00am - 6:00pm</option>
          <option value="12pm">12:00pm - 6:00pm</option>
          <option value="04">04:00pm - 7:00pm</option>
        </select>
        <label>Available Days</label>
        <select value={availabledays} onChange={handleAvailabledaysChange}>
          
          <option value="mon">mon - fri</option>
          <option value="fri">fri - sat</option>
          <option value="wed">wed - fri</option>
        </select>
        <label>Minimum Order Amount</label>
        <input type="text" placeholder="" value={amount}  />
<label>Average Schedule Date</label>
        <input type="text" placeholder="" />
        <div className="button-container">
        <button type="button" className="save-btn">Save</button>
        </div>

        </div>
    </div>
    </div></div>
                </div>
        </div>
    )
}

export default Setting;