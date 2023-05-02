import { useState, useRef, useCallback } from "react";
import TodoInsert from "./TodoInsert";
import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";

const TodoContain = ({ days, nowDate }) => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);
  const onRemove = useCallback((id, checked) => {
    setTodos((todos) =>
      todos.filter((todo) => (checked ? todo.id !== id : true))
    );
  }, []);
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);
  return (
    <TodoTemplate nowDate={nowDate} days={days}>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default TodoContain;
