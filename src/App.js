import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="task-details">
            <div>
              <input type="checkbox" />
              <span>{t}</span>
            </div>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;