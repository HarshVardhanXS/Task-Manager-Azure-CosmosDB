import React, { useEffect, useState } from 'react';
import './App.css';

const API_BASE = '/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(`${API_BASE}/GetTasks`);
    const data = await res.json();
    setTasks(data);
  };

  const createTask = async () => {
    await fetch(`${API_BASE}/CreateTask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTask }),
    });
    setNewTask('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_BASE}/DeleteTask?id=${id}`, { method: 'DELETE' });
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={createTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;