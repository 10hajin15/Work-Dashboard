import './ModalVacation.css';
import styled from "styled-components";

const VacationDaysSetButton = styled.button`{
  background-color: #ED2E5C;
  color: white;
  width: 80px;
  height: 35px;
  cursor: pointer;
  margin: 15px;
  font-weight: 200;
  border-radius: 8px;
  border: none;
  font-size: 15px;
}:hover {
  background-color: #1479FB;
  color: white;
}
`

const ModalVacation = (props) => {
  const {open, setModalVacationOpen, vacationDays, setVacationDays, range, setRange, recoilVacationDays, setRecoilVacationDays} = props;

  const onClickCloseButton = () => {
    setModalVacationOpen(false);
  }

  const onClickSetVacationDays = () => {
    if(vacationDays) {
      let total =[]
      if(range.to) {
        for (let i = range.from.getDate(); i <= range.to.getDate(); i++) {
          total.push(new Date(range.from.getFullYear(), range.from.getMonth(), i));
        }
        setVacationDays(vacationDays - (range.to.getDate() - range.from.getDate() + 1));
      } else {
        total = [range.from]
        setVacationDays(vacationDays - 1);
      }
      setRecoilVacationDays([...recoilVacationDays, ...total]);
      setModalVacationOpen(false);
      setRange();
    } else {
      alert('연차를 모두 소진하셨습니다!')
    }
    
  }



  return (
    <>
      <div
        className={
          open ? "vacation-modal-openModal vacation-modal" : "vacation-modal"
        }
      >
        {open ? (
          <>
            <div className="vacation-modal-area">
                <section className="vacation-modal-section">
                  <header>
                    <div className="vacation-modal-title">연차 신청</div>
                    <button className="vacation-modal-close" onClick={onClickCloseButton}>
                      &times;
                    </button>
                  </header>
                  <main>
                    <div>
                      {
                        range.from && range.to
                        ? `${range.from.getMonth()+1}월 ${range.from.getDate()}일부터 ${range.to.getMonth()+1}월 ${range.to.getDate()}일까지 연차 신청을 하시겠습니까?`
                        : `날짜를 선택해주세요!`
                      }
                    </div>
                    <div>
                      {
                        range.from && range.to
                        ? <>
                            <VacationDaysSetButton onClick={onClickSetVacationDays}>확인</VacationDaysSetButton>
                            <VacationDaysSetButton onClick={onClickCloseButton}>취소</VacationDaysSetButton>
                          </>
                        : <VacationDaysSetButton onClick={onClickCloseButton}>확인</VacationDaysSetButton>
                      }
                      
                    </div>
                  </main>
                </section>
            </div>
            
          </>
        ) : null}
      </div>
    </>
  );
}

export default ModalVacation;