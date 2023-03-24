import { useState } from "react";
import './sideContents.css';
import styled from "styled-components";
import CommuteChart from "./CommuteChart";

const CoummuteArea = styled.div`{
  background-color: #1479FB;
  color: white;
  border-radius: 20px;
  margin: 15px 0;
  width: 27vw;
  height: 38%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12)
} :hover {
  box-shadow: 0 5px 5px rgba(0,0,0,0.22);
}
`

const AttendanceButton = styled.div`{
  background-color: white;
  width: 80px;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 200;
  border-radius: 8px;
  color: #1479FB;
  
}:hover {
  background-color: #ED2E5C;
  color: white;
}
`

const Commute = () => {
  
  const [isAttendance, setIsAttendance] = useState(false);
  const [isWorkDone, setIsWorkDone] = useState(false);
  const [attendTime, setAttendTime] = useState();
  const [absenceTime, setAbsenceTime] = useState();
  const [workTime, setWorkTime] = useState(0);
  const now = new Date();

  const onClickAttendance = () => {
    setIsAttendance(!isAttendance);
    const attendMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    setAttendTime(`${now.getHours()}:${attendMinutes}`);
    setWorkTime(now.getHours());
  }

  const onClickWorkDone = () => {
    setIsWorkDone(!isWorkDone);
    const workDoneMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    setAbsenceTime(`${now.getHours()}:${workDoneMinutes}`);
  }

  return (
    <CoummuteArea>
      <div className="workman-name">김인턴 님</div>
      <div className="commute-chart">
        <CommuteChart color="#6EFACC" percent={workTime ? ((now.getHours() - workTime)/8).toFixed(2) : 0} size="100px" />
      </div>
      <div className="work-attendance-area">
        <div className="work-time">
          {isAttendance ? <span className="attend-time">출근 {attendTime}</span> : <span className="attend-time item-hide">출근 20:20</span> }
          {isWorkDone ? <span className="absence-time">   / 퇴근 {absenceTime}</span>  : <span className="absence-time item-hide"> / 출근 20:20</span>}
        </div>
        <div className="attend-or-no">
          {isAttendance
            ? null
            : <AttendanceButton className="attend" onClick={onClickAttendance}>출근하기</AttendanceButton>
          }
          {isAttendance && !isWorkDone
            ? <AttendanceButton className="absence" onClick={onClickWorkDone}>퇴근하기</AttendanceButton>
            : null
          }
          {
            isWorkDone
            ? <div className="seeyou">내일 만나요 😁</div>
            : null
          }
        </div>
      </div>
    </CoummuteArea>
  );
};

export default Commute;