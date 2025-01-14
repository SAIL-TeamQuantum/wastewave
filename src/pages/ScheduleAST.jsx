import React, { useState } from "react";
import "../assets/ASTcss/Schedule.css";
import DashboardHeaderAST from "../components/DashboardHeaderAST";
import DashboardInfo from "../components/DashboardMoreInfoAST";
import DashboardFooter from "../components/DashboardFooterAST";
import ScheduleInfoAST from "../components/ScheduleInfoComp";
import { FaToggleOn } from "react-icons/fa";
const ScheduleAST = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Tracks the selected date
  const [isScheduleView, setIsScheduleView] = useState(false); // Tracks the current view
  const [scheduledDates, setScheduledDates] = useState([]); // Tracks scheduled dates

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    setIsScheduleView(true); // Switch to the schedule view
  };

  const handleScheduleComplete = () => {
    setScheduledDates((prev) => [
      ...prev,
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ).toISOString(),
    ]);
    setIsScheduleView(false); // Go back to the calendar view
  };

  const rows = [];
  let cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(<td key={`empty-${i}`}></td>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    ).toISOString();

    cells.push(
      <td
        key={day}
        className={`calendar-day ${
          selectedDate?.getDate() === day ? "selected" : ""
        }`}
        onClick={() => handleDateClick(day)}
      >
        {day}
        {scheduledDates.includes(dateKey) &&  <span className="toggle-on-icon">scheduled</span>}
      </td>
    );
    if ((day + firstDay) % 7 === 0 || day === daysInMonth) {
      rows.push(<tr key={`row-${day}`}>{cells}</tr>);
      cells = [];
    }
  }

  return (
    <div>
      <div className="main-container">
        <DashboardHeaderAST />
        {isScheduleView ? (
          <ScheduleInfoAST
            selectedDate={selectedDate}
            onBack={() => setIsScheduleView(false)} // Callback to return to the calendar
            onScheduleComplete={handleScheduleComplete}
          />
        ) : (
          <div className="calendar-container">
            <div className="calendar-header">
              <button onClick={handlePrevMonth}>{"<"}</button>
              <h2>
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {currentDate.getFullYear()}
              </h2>
              <button onClick={handleNextMonth}>{">"}</button>
            </div>
            <div className="calendar-text">
              <p>Select your preferred date for waste disposal</p>
            </div>
            <table className="calendar">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tues</th>
                  <th>Wed</th>
                  <th>Thur</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        )}
        <DashboardInfo />
      </div>
      <DashboardFooter />
    </div>
  );
};

export default ScheduleAST;
