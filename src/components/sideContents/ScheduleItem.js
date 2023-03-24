import styled from "styled-components";

const TodoBtn = styled.div`{
  border: none;
  border-radius: 30px;
  height: 30px;
  width: 30px;
  background-color: red;
  line-height: 30px;
  margin-right: 10px;
  cursor: pointer;
}
`

const ScheduleItem = ({todo,todoList, setTodoList}) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todo.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  return (
    <li className="todolist">
      <input
        type="checkbox"
        className="todo_item-checkbox"
        checked={todo.checked}
        onChange={onChangeCheckbox}
      />
      <span className={`todo_item ${todo.checked ? 'gray-background' : ''}`}
      >{todo.textContent}</span>

      <TodoBtn className="todo_item-edit-btn">
        ✍️
      </TodoBtn>
      <TodoBtn className="todo_item-delete-btn">
        🗑
      </TodoBtn>
    </li>
  );
};

export default ScheduleItem;