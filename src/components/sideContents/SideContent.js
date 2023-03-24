import Commute from "./Commute";
import Schedule from "./Schedule";
import styled from "styled-components";

const SideArea = styled.div`{
  height: 100vh;
  width: 30%;
  background-color: white;
  box-shadow: 10px 0 10px -10px rgba(0,0,0,0.16);
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
`

const SideContent = () => {
  return (
    <SideArea>
      <Commute></Commute>
      <Schedule></Schedule>
    </SideArea>
  );
};

export default SideContent;