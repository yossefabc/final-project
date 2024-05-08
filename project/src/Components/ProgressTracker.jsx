import React, { useState, useEffect } from 'react';

function ProgressTracker() {
  // Retrieve tasks from localStorage or initialize as an empty array
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [completedTasks, setCompletedTasks] = useState(0);
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState(initialTasks);

  const totalTasks = tasks.length;

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskCompletion = () => {
    if (completedTasks < totalTasks) {
      setCompletedTasks(completedTasks + 1);
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      setTasks([...tasks, taskName]);
      setTaskName('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <section id="progress">
      <h2>Progress Tracker</h2>
      <p>Completed tasks: {completedTasks} / {totalTasks}</p>
      <button onClick={handleTaskCompletion}>Complete Task</button>

      <form onSubmit={handleAddTask}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProgressTracker;



