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


const Schedule = () => {
  const [modalTodoOpen, setModalTodoOpen] = useState(false);

  const [todoList, setTodoList] = useState([]);

  const openModal = () => {
    setModalTodoOpen(true);
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
    <ModalTodo open={modalTodoOpen} setModalTodoOpen={setModalTodoOpen} todoList={todoList} setTodoList={setTodoList}></ModalTodo>
  </>
  );
};

export default Schedule;