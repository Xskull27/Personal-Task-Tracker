import React from "react";
import TaskItem from "./TaskItem";


function TaskList({ tasks, setTasks, filter, search = "" }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  }).filter((task) => {
    if (!search.trim()) return true;
    const term = search.trim().toLowerCase();
    return (
      task.title.toLowerCase().includes(term) ||
      (task.description && task.description.toLowerCase().includes(term))
    );
  });

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p className="no-tasks">No tasks to show.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
