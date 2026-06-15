import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault();
    todoList([...todoList, todo]);
    setTodo("");
  }
  
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
           setTodo( e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
