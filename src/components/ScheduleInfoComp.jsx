import React, { useState } from "react";

import "../assets/ASTcss/ScheduleInfo.css";
import { FaAngleDown } from "react-icons/fa";

const OptionsGroup = ({ options, selectedOptions, onChange, title }) => (
  <div>
    <div className="calendar-text">
      <p>{title}</p>
    </div>
    <div className="flex-container options-container">
      {options.map((option) => (
        <label key={option.value} className="flex-container option-label">
          <input
            type="checkbox"
            name="optionsGroup"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={onChange}
            className="option-input"
          />
          <span className="custom-checkbox"></span>
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

const ScheduleInfoAST = ({ selectedDate, onScheduleComplete, onBack }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  const wasteOptions = [
    { value: "degradable", label: "Degradable Waste" },
    { value: "plastics", label: "Plastics" },
    { value: "medical", label: "Medical Waste" },
    { value: "nylons", label: "Nylons" },
  ];


    const [name, setName] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform form submission logic here
      console.log(`Name: ${name}`);
    };

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <button className="Selected_Month_Button"  onClick={onBack}>
            <div className="flex-container Selected_Month">
              <span>
                {selectedDate?.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="AngleDown">
                <FaAngleDown style={{ color: "#fff", fontSize: "30px" }} />
              </span>
            </div>
          </button>
        </div>
        <OptionsGroup
          title="What does your waste consist of?"
          options={wasteOptions}
          selectedOptions={selectedOptions}
          onChange={handleChange}
        />
       <form onSubmit={handleSubmit}>
       <div className="calendar-text">
        <p className="BagTittle">How many bags are you disposing?</p>
       
        <input
          type="tel"
          className="BagInput"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
        <button className="schedule-button" type="submit" onClick={onScheduleComplete}>
          Schedule Trash
        </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleInfoAST;
