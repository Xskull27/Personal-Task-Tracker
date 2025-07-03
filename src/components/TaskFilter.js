import React from "react";

function TaskFilter({ filter, setFilter, counts = {} }) {
  const filters = ["All", "Completed", "Pending"];

  return (
    <div className="task-filter">
      {filters.map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f} <span style={{fontWeight: 600, fontSize: '0.98em', opacity: 0.8}}>[{counts[f] ?? 0}]</span>
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
