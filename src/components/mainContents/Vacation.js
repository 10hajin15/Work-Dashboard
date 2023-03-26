import { useState } from "react";
import styled from "styled-components";
import ModalVacation from "./ModalVacation";
import './Vacation.css';
import VacationChart from "./VacationChart";

import { useRecoilState } from 'recoil';
import { recoilVacationDaysState } from "../../state/recoilVacationDaysState";

const VacationContents = styled.div`{
  display: flex;
  align-item: center;
  margin-bottom: 7px;
}
`

const VacationButton = styled.button`{
  background-color: #ED2E5C;
  color: white;
  width: 80px;
  height: 35px;
  cursor: pointer;
  margin-top: 25px;
  margin-left: 45px;
  font-weight: 200;
  border-radius: 8px;
  border: none;
  font-size: 15px;
}:hover {
  background-color: #1479FB;
  color: white;
}
`

const Vacation = ({range}) => {
  const [vacationDays, setVacationDays] = useState(15);
  const [modalVacationOpen, setModalVacationOpen] = useState(false);
  const [recoilVacationDays, setRecoilVacationDays] = useRecoilState(recoilVacationDaysState);

  const openModal = () => {
    setModalVacationOpen(true);
  }

  return (
    <>
    <div className="vacation-contents">
      <VacationContents>
        <div className="vacation-chart">
          <VacationChart color="#ED2E5C" percent={(vacationDays/15).toFixed(2)} size="150px"/>
        </div>
        <div className="vacation-contents-text">
          <div>
            <div className="vacation-title">연차 현황</div>
            <span className="remain-vacation-days">{vacationDays}일</span>
            <span className="vacation-days"> / 15일</span>
          </div>
        </div>
      </VacationContents>
      <div>
        <VacationButton onClick={() => openModal()}>연차 신청</VacationButton>
        <span className="vacation-exp">달력에서 날짜를 선택한 후 연차 신청을 눌러주세요!</span>
      </div>
    </div>
    <ModalVacation open={modalVacationOpen} setModalVacationOpen={setModalVacationOpen} vacationDays={vacationDays} setVacationDays={setVacationDays} range={range} recoilVacationDays={recoilVacationDays} setRecoilVacationDays={setRecoilVacationDays} ></ModalVacation>
    </>
  );
};

export default Vacation;