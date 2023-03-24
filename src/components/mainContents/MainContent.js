import VacationArea from "./VacationArea";
import WorkingWeek from "./WorkingWeek";
import styled from "styled-components";

const MainContentArea = styled.div`{
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2.5vw;
}
`

const MainContent = () => {


  return (
    <MainContentArea>
      <WorkingWeek></WorkingWeek>
      <VacationArea></VacationArea>
    </MainContentArea>
  );
};

export default MainContent;