import React, { useState, useMemo, useCallback } from 'react';

// 1. REACT.MEMO: Prevents the task list from re-rendering 
// unless its props (tasks or onDelete) actually change.
const TaskList = React.memo(({ tasks, onDelete }) => {
  // console.log("🎨 TaskList Rendered!");
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
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Clean the room" }
  ]);
  const [darkTheme, setDarkTheme] = useState(true);
  const [input, setInput] = useState("");

  // 2. USEMEMO: Caches the result of a computationally expensive operation
  const analyticsSummary = useMemo(() => {
    console.log("⚡ Running heavy analytics calculation...");
    // Simulating a heavy CPU-intensive loop
    for (let i = 0; i < 100000000; i++) {} 
    return `Total Tasks Monitored: ${tasks.length * 42}`; 
  }, [tasks]); // Only re-runs when 'tasks' changes

  // 3. USECALLBACK: Caches the function definition itself 
  // so it doesn't get re-created on every single render.
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }, []); // Empty dependency array means this function reference never changes

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
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}