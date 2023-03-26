import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import './Calendar.css';



const CalendarArea = (props) => {
  const {range, pastMonth, defaultSelected, setRange} = props;

  return (
    <>
      <div className="calendar-sec">
        <DayPicker
          mode="range"
          defaultMonth={pastMonth}
          selected={range}
          onSelect={setRange}
          disabled={defaultSelected}
        />
      </div>
    </>
  );
};

export default CalendarArea;