import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  return (
    <div className="container">
      <h1 className="text-center my-4 heading">Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
