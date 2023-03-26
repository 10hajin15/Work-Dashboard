import { useRef, useState } from "react";
import './ModalTodo.css'

function randomIDGenerator() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

const ModalTodo = (props) => {
  const {open, setModalTodoOpen, todoList, setTodoList} = props;

  const [text, setText] = useState('');
  const inputRef = useRef(null); // (1)

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    if(text) {
      const nextTodoList = todoList.concat({ // (2)
        id: randomIDGenerator(), // (2-1)
        textContent: text,
        checked: false
      });
      setTodoList(nextTodoList);
      setModalTodoOpen(false);
      setText('');
    } else {
      alert('할 일을 입력해주세요!');
    }
  };

  const onClickCloseButton = () => {
    setText('');
    setModalTodoOpen(false);
  }

  return (
    <>
      <div
        className={
          open ? "todo-modal-openModal todo-modal" : "todo-modal"
        }
      >
        {open ? (
          <>
            <div className="todo-modal-area">
                <section className="todo-modal-section">
                  <header>
                    <button className="todo-modal-close" onClick={onClickCloseButton}>
                      &times;
                    </button>
                  </header>
                  <main>
                    <div className="todo_inputbox">
                      <input
                        type="text"
                        name="todoItem"
                        value={text}
                        ref={inputRef}
                        placeholder="할 일을 입력해주세요"
                        className="todo_inputbox"
                        onChange={onChangeInput}
                      />
                      <button
                        type="submit"
                        className="todo_inputbox-add-btn"
                        onClick={onClickAddButton}
                      >
                        추가
                      </button>
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

export default ModalTodo;