import Vacation from "./Vacation";
import styled from "styled-components";
import CalendarArea from "./CalendarArea";


const VacationSection = styled.div`{
  height: 45%;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
`

const VacationArea = () => {
  
  return (
    <VacationSection>
      <CalendarArea></CalendarArea>
      <Vacation></Vacation>
    </VacationSection>
  );
};

export default VacationArea;