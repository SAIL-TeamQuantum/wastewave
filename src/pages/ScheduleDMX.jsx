import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { useState } from "react";

const ScheduleDMX = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(true);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setFormVisible(true);
    setCalendarVisible(false); // Properly hide calendar
  };

  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const closeForm = () => {
    setFormVisible(false);
    setCalendarVisible(true); // Show calendar again if necessary
  };

  return (
    <>
      <Container>
        {/* <p>Select a date from the calendar below:</p> */}
        {isCalendarVisible ? (
          <Calendar calendarType="gregory" onClickDay={handleDayClick} />
        ) : (
          isFormVisible && (
            <div className="form-overlay">
              <div className="form-container">
                <h2>{selectedDate?.toDateString()}</h2>
                <p>What does your waste consist of?</p>
                <div className="options">
                  <label>
                    <input
                      type="radio"
                      name="waste-type"
                      value="Degradable Waste"
                    />
                    Degradable Waste
                  </label>
                  <label>
                    <input type="radio" name="waste-type" value="Plastics" />
                    Plastics
                  </label>
                  <label>
                    <input type="radio" name="waste-type" value="Medical Waste" />
                    Medical Waste
                  </label>
                  <label>
                    <input type="radio" name="waste-type" value="Nylons" />
                    Nylons
                  </label>
                </div>

                <p>How many bags are you disposing?</p>
                <div className="options">
                  <label>
                    <input type="radio" name="bags" value="1-5" />
                    1 - 5
                  </label>
                  <label>
                    <input type="radio" name="bags" value="6-10" />
                    6 - 10
                  </label>
                  <label>
                    <input type="radio" name="bags" value="11-15" />
                    11 - 15
                  </label>
                  <label>
                    <input type="radio" name="bags" value="16+" />
                    16 & above
                  </label>
                </div>

                <button className="schedule-btn">SCHEDULE TRASH</button>
                <button className="close-btn" onClick={closeForm}>
                  Go Back
                </button>
              </div>
            </div>
          )
        )}
      </Container>
    </>
  );
};

export default ScheduleDMX
const Container = styled.div`
    background-color: #81B622;
    color: white;
    max-width: 800px;
    margin: auto;
    margin-top: 30px;
    border-radius: 30px;
    padding: 50px;
    .react-calendar__navigation {
    display: flex;
    }
    .react-calendar__month-view__weekdays {
        border: 1px solid white;
        padding: 0px;
    }
    .react-calendar__month-view__weekdays__weekday {
        /* border: 1px solid white; */
        /* padding: 10px; */
    }
    .react-calendar__navigation__prev2-button {
        display: none;
    }
    .react-calendar__navigation__next2-button {
        display: none;
    }
    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
    .react-calendar__month-view__weekdays {
    text-align: center;
    padding: 10px;
    }
    button {
    /* margin: 3px; */
    background-color: #81B622;
    border: 1px solid white;
    /* border-radius: 3px; */
    color: white;
    padding: 10px 5px;

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: #a5c1a5;
    }
  }

  .form-container h2 {
    border: 1px solid white;
    border-radius: 50px;
    width: 400px;
    height: 70px;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
  }
  .schedule-btn {
    width: 197px;
    height: 54px;
    border-radius: 10px;
    color: #81B622;
    background-color: white;
    margin-right: 50px;
  }
  .close-btn {
    width: 147px;
    height: 54px;
    border-radius: 10px;
    color: white;
  }
  label {
    margin-right: 20px;
  }
`