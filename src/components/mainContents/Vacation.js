import { useState } from "react";
import styled from "styled-components";
import './Vacation.css';
import VacationChart from "./VacationChart";

const VacationRequest = styled.div`{
  background-color: white;
  width: 45%;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
`

const VacationContents = styled.div`{
  display: flex;
  justify-content: center;
}
`

const VacationButton = styled.button`{
  background-color: #ED2E5C;
  color: white;
  width: 80px;
  height: 35px;
  cursor: pointer;
  margin-top: 25px;
  font-weight: 200;
  border-radius: 8px;
  border: none;
  font-size: 15px;
}:hover {
  background-color: #1479FB;
  color: white;
}
`

const Vacation = () => {
  const [vacationDays, setVacationDays] = useState(15);

  return (
    <VacationRequest>
      <div className="vacation-title">연차 현황</div>
      <VacationContents>
        <div className="vacation-chart">
          <VacationChart color="#ED2E5C" percent={(vacationDays/15).toFixed(2)} size="150px"/>
        </div>
        <div className="vacation-contents-text">
          <div>
            <span className="remain-vacation-days">{vacationDays}일</span>
            <span className="vacation-days"> / 15일</span>
          </div>
          <div>
            <VacationButton>연차 신청</VacationButton>
          </div>
        </div>
      </VacationContents>
    </VacationRequest>
  );
};

export default Vacation;