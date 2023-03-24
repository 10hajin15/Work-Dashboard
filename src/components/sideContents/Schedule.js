import React, { useState } from "react";
import styled from "styled-components";
import ModalTodo from "./ModalTodo";
import ScheduleItem from "./ScheduleItem";

const ScheduleBG = styled.div`{
  width: 27vw;
  border-radius:20px;
  background-color: #E6F4F1;
  height: 55%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12)
} :hover {
  box-shadow: 0 5px 5px rgba(0,0,0,0.22);
}
`
function randomIDGenerator() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

const Schedule = () => {
  const [modalTodoOpen, setModalTodoOpen] = useState(false);

  const [todoList, setTodoList] = useState([
    {
      id: randomIDGenerator(),
      textContent: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: randomIDGenerator(),
      textContent: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: randomIDGenerator(),
      textContent: '투두리스트 만들기',
      checked: false,
    },
  ]);

  const openModal = () => {
    setModalTodoOpen(true);
  }

  const closeModal = () => {
    setModalTodoOpen(false);
  }

  return (
    <>
    <ScheduleBG>
      <div className="todo-title">
        <div className="today-todo">오늘 일정</div>
        <div className="todo-add" onClick={() => openModal()}>+</div>
      </div>
      <ul className="todolist-area">
      {todoList && todoList.map((todo) => (
        <ScheduleItem
          todo={todo}
          todoList={todoList}
          key={todo.id}
          setTodoList={setTodoList}
        />
      ))}
    </ul>
    </ScheduleBG>
    <ModalTodo open={openModal} close={closeModal}></ModalTodo>
  </>
  );
};

export default Schedule;