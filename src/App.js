import './App.css';
import MainContent from './components/mainContents/MainContent';
import SideContent from './components/sideContents/SideContent';
import styled from "styled-components";

const BodyContents = styled.div`{
  display: flex;
  justify-content: space-between;
}
`


function App() {
  return (
    <BodyContents>
      <SideContent className='side-content'></SideContent>
      <MainContent className='main-content'></MainContent>
    </BodyContents>
  );
}

export default App;
