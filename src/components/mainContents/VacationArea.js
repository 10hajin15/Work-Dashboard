import Vacation from "./Vacation";
import styled from "styled-components";
import CalendarArea from "./CalendarArea";
import { addDays } from 'date-fns';

import './Vacation.css';
import { useState } from "react";



const VacationSection = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 65vw;
  height: 45%;
  margin: 15px 0;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.12)
}
`

const VacationContents = styled.div`{
  display: flex;
  justify-content: center;
  align-item: center;
}
`

const pastMonth = new Date();

const VacationArea = () => {
  const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 0)
  };

  const [range, setRange] = useState(defaultSelected);

  return (
    <VacationSection>
      <VacationContents>
        <CalendarArea pastMonth={pastMonth} range={range} setRange={setRange}></CalendarArea>
        <Vacation range={range}></Vacation>
      </VacationContents>
    </VacationSection>
  );
};

export default VacationArea;