import React, { useState } from 'react';

function ProgressTracker() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;

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
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProgressTracker;

