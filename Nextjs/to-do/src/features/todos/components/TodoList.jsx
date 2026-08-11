"use client";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const {
    todos,
    loading,
    error, 
    addTodo,
    editTodo,
    removeTodo,
    toggleComplete,
  } = useTodos();

  if (loading) return <div className="loading">Loading todos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />

      <div className="todo-stats">
        <span>Total: {todos.length}</span>
        <span>Completed: {completedCount}</span>
        <span>Pending: {pendingCount}</span>
      </div>

      <div className="todos-list">
        {todos.length === 0 ? (
          <p className="no-todos">No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onDelete={removeTodo}
              onToggle={toggleComplete}
              onUpdate={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}
