import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import './Calendar.css';



const CalendarArea = (props) => {
  const {pastMonth, range, setRange} = props;
  
  return (
    <>
      <div className="calendar-sec">
        <DayPicker
          mode="range"
          defaultMonth={pastMonth}
          selected={range}
          onSelect={setRange}
        />
      </div>
    </>
  );
};

export default CalendarArea;