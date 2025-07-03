import React, { useState } from "react";


function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div style={{ margin: '0.7em 0 0.2em 0', fontWeight: 500, color: '#1565c0', fontSize: '1.05em' }}>Name your task</div>
      <input
        type="text"
        placeholder="Task Title (required)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label style={{ fontWeight: 500, margin: '0.5em 0 0.2em 0', display: 'block', color: '#1565c0' }} htmlFor="due-date-input">Due Date</label>
      <input
        id="due-date-input"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ minWidth: 120 }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
