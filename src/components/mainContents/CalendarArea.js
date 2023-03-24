import styled from "styled-components";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './CalendarArea.css'

const CalendarSection = styled.div`{
  background-color: white;
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.12);
  display: flex;
  justify-content: center;
  align-items: center;
}
`

const CalendarArea = () => {
  const [value, onChange] = useState(new Date());


  return (
    <CalendarSection>
      <div className="calendar-sec">
        <Calendar
            onChange={onChange}
            value={value}
            navigationLabel={null}
            showNeighboringMonth={false}
            formatDay={(locale, date) => moment(date).format("DD")}

          />
      </div>
    </CalendarSection>
  );
};

export default CalendarArea;