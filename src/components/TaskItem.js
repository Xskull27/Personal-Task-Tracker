import React, { useState } from "react";

function TaskItem({ task, updateTask, deleteTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  const handleSave = () => {
    updateTask({ ...task, title, description, dueDate });
    setIsEditing(false);
  };

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            style={{ minWidth: 120 }}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <span className="task-title">{task.title}</span>
            {task.description && <p style={{ margin: '0.2rem 0 0.5rem 0', color: '#aaa' }}>{task.description}</p>}
            <div className="task-meta">
              <span>Created: {new Date(task.createdAt).toLocaleString()}</span>
              {task.dueDate && (
                <span className="due-date-highlight">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
              )}
              <span>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</span>
            </div>
          </div>
          <div className="btn-group">
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={toggleComplete}>
              {task.completed ? "↩️ Mark Pending" : "✅ Mark Completed"}
            </button>
            <button onClick={() => deleteTask(task.id)}>🗑️ Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
