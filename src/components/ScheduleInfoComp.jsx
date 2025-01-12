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

  const bagOptions = [
    { value: "1-5", label: "1 - 5" },
    { value: "6-10", label: "6 - 10" },
    { value: "11-15", label: "11 - 15" },
    { value: "15-20", label: "15 - 20" },
  ];

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
        <OptionsGroup
          title="How many bags are you disposing?"
          options={bagOptions}
          selectedOptions={selectedOptions}
          onChange={handleChange}
        />
        <button className="schedule-button" onClick={onScheduleComplete}>
          Schedule Trash
        </button>
      </div>
    </div>
  );
};

export default ScheduleInfoAST;
