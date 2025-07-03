# Personal Task Tracker

## 📖 Description
A modern, visually appealing React app to manage your personal tasks. Features per-user login, task CRUD, filtering, search, due dates, and light/dark themes—all with a clean, professional UI.

## 🚀 Features
- User login (per-user task lists)
- Add, edit, delete, and mark tasks as completed
- Due date support and visual highlighting
- Filter by All, Completed, Pending
- Search tasks by title/description
- Per-filter task counts
- Light/dark mode toggle
- Responsive, fullscreen layout
- Subtle background image
- Persistent login (localStorage)

## 🛠 Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open [http://localhost:3000](http://localhost:3000)

## 🧰 Technologies Used
- React.js
- CSS (custom, animated, blue-focused theme)


## 🔗 Live Demo
(personal-task-tracker-nu.vercel.app)


## 🖼 Screenshots
![Task Tracker Screenshot 1](screenshots/screenshot1.png)
![Task Tracker Screenshot 2](screenshots/screenshot2.png)

---

## 🛠 Setup Instructions (from scratch)

1. Create your React app:
   ```bash
   npx create-react-app task-tracker
   ```
2. Clean up unnecessary files
3. Plan your component structure
4. Start with the login component
5. Build task management features
6. Add filtering functionality
7. Style your application
8. Test thoroughly
9. Deploy and document

## 🧩 Project Structure

task-tracker/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Login.js
│ │ ├── TaskForm.js
│ │ ├── TaskItem.js
│ │ ├── TaskList.js
│ │ └── TaskFilter.js
│ ├── utils/
│ │ └── localStorage.js
│ ├── styles/
│ │ └── App.css
│ ├── App.js
│ └── index.js
├── README.md
└── package.json


## 🧪 Sample Data for Testing
```js
const sampleTasks = [
  {
    id: 1,
    title: "Complete React assignment",
    description: "Build a task tracker application",
    completed: false,
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Review JavaScript concepts",
    description: "Go through ES6+ features",
    completed: true,
    createdAt: "2024-01-14T15:30:00Z"
  }
];
```
