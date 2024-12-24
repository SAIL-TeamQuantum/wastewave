import React from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'
import { useState } from 'react'
const ScheduleDMX = () => {

    const [date, setDate] = useState(new Date());
  return (
    <>
        <Container>
            <p>Select a date from the calendar below:</p>
            <Calendar calendarType='gregory' onChange={setDate} value={date}/>
            <p>You selected: {date.toDateString()}</p>
        </Container>
    </>
  )
}

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
`