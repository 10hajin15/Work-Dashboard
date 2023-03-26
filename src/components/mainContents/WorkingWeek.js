import styled from "styled-components";
import WorkingWeekBarChart from "./WorkingWeekBarChart";

const WorkingWeekArea = styled.div`{
  background-color: white;
  width: 65vw;
  height: 45%;
  margin: 15px 0;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.12)
}
`

const WorkingWeek = () => {
  return (
    <WorkingWeekArea>
      <WorkingWeekBarChart></WorkingWeekBarChart>
    </WorkingWeekArea>
  );
};

export default WorkingWeek;