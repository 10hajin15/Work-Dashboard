import { useState } from "react";
import './ModalVacation.css';

const ModalVacation = (props) => {
  const {open, setModalVacationOpen, vacationDays, setVacationDays} = props;
  const [vacationRange, setvacationRange ] = useState('');

  const onClickCloseButton = () => {
    setModalVacationOpen(false);
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
                    <div></div>
                    <button>확인</button>
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