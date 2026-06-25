import React, { useState, useMemo, useCallback } from 'react';

// 1. REACT.MEMO: Prevents the task list from re-rendering 
// unless its props (tasks or onDelete) actually change.
const TaskList = ({ tasks, onDelete }) => {
  console.log("🎨 TaskList1 Rendered!");
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} <button onClick={() => onDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

const TaskLists = React.memo(({ tasks, onDelete }) => {
  console.log("🎨 TaskList2 Rendered!");
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} <button onClick={() => onDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
});
export default function Dashboard() {
  const [task, setTask] = useState([
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Clean the room" }
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Clean the room" }
  ]);
  const [darkTheme, setDarkTheme] = useState(true);
  const [input, setInput] = useState("");

  // FIX 1: Added [tasks] so it recalculates when the task list changes
  const analyticsSummary = useMemo(() => {
    console.log("⚡ Running heavy analytics calculation...");
    for (let i = 0; i < 100000000; i++) {} 
    return `Total Tasks Monitored: ${tasks.length * 2}`; 
  }, [tasks]); 

  // FIX 2: Changed useMemo to useCallback so it returns a clickable function
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    console.log("Task deleted!");
}, []); // Empty array is fine here because we use the functional updater form of setState

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div style={{ background: darkTheme ? '#333' : '#fff', color: darkTheme ? '#fff' : '#000', padding: '20px' }}>
      <h2>Task Dashboard</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
      
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Task" />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h3>{analyticsSummary}</h3>
      <TaskList tasks={task} onDelete={deleteTask} />
      <TaskLists tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}