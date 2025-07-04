import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { getUser, saveUser } from "./utils/localStorage";


function App() {
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) setUser(savedUser);
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleLogin = (username) => {
    setUser(username);
    saveUser(username);
  };

  // Calculate counts for each filter
  const allCount = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.filter(t => !t.completed).length;

  // Get today's date and day in a readable format
  const [today, setToday] = useState(() => {
    const d = new Date();
    return d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  });

  useEffect(() => {
    // Update date at midnight
    const interval = setInterval(() => {
      const d = new Date();
      setToday(d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, 60 * 1000); 
    return () => clearInterval(interval);
  }, []);

  return user ? (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: 'transparent', padding: '0.5rem 0.8rem 0 0', position: 'relative' }}>
        <div className="date-header" style={{ fontWeight: 600, fontSize: '1.1rem', color: '#2563eb', letterSpacing: '0.04em' }}>
          <span role="img" aria-label="calendar" style={{ marginRight: 6 }}>📅</span>{today}
        </div>
      </div>
      <header className="app-header">
        <h1>PERSONAL TASK TRACKER</h1>
      </header>
      <div className="top-bar">
        <h1>Welcome, {user}!</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskFilter filter={filter} setFilter={setFilter} counts={{ All: allCount, Completed: completedCount, Pending: pendingCount }} />
      {/* Search bar placed just above the task list for better usability */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1.5rem 0 0.5rem 0' }}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '60%',
            maxWidth: 400,
            padding: '0.7rem 1.2rem',
            borderRadius: 8,
            border: '1.5px solid #b3b3ff',
            fontSize: '1rem',
            outline: 'none',
            background: darkMode ? '#23272f' : '#f8faff',
            color: darkMode ? '#f4f4f4' : '#23272f',
            boxShadow: '0 2px 8px 0 rgba(160, 180, 255, 0.08)',
            transition: 'border 0.3s, box-shadow 0.3s',
          }}
        />
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} search={search} />
    </div>
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;



