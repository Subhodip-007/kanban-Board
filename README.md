# Kanban Board

A lightweight, interactive Kanban task management application built with JavaScript. Organize tasks, manage workflows, and keep your progress saved locally with browser-based storage.

🔗 **Live Demo:** [View Kanban Board](https://subhodip-007.github.io/kanban-Board/)

---

## Overview

Kanban Board is a task management application designed to help users organize and track their daily tasks through a visual workflow.

The application follows a simple Kanban methodology, allowing users to manage tasks across three stages: **To Do, In Progress, and Completed**.

It also uses browser `localStorage` to persist tasks, allowing users to access their saved tasks even without an active internet connection.

## Features

- **Task Management:** Create and manage tasks through an interactive board.
- **Drag and Drop:** Move tasks between workflow columns using drag-and-drop interactions.
- **Three Workflow Stages:** Organize tasks into To Do, In Progress, and Completed.
- **Local Data Persistence:** Store tasks using browser `localStorage`.
- **Offline Access:** Access and manage previously saved tasks without an internet connection.
- **Persistent State:** Restore saved tasks after refreshing or reopening the application.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and layout |
| JavaScript | Application logic and interactions |
| localStorage | Client-side data persistence |

## Workflow

The application follows a simple task management workflow:

```text
        Create Task
             |
             v
          TO DO
             |
        Drag & Drop
             |
             v
       IN PROGRESS
             |
        Drag & Drop
             |
             v
         COMPLETED
```

## Offline Functionality

The application uses the browser's `localStorage` API to maintain task data locally.

**How it works:**

1. Users create or update tasks.
2. Task data is stored in browser localStorage.
3. When the application is reopened, previously saved tasks are retrieved.
4. Users can continue managing locally stored tasks without an internet connection.

> Note: Offline functionality relies on locally stored data. The application does not currently implement backend synchronization or cross-device data synchronization.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Subhodip-007/kanban-Board.git
```

### 2. Navigate to the project directory

```bash
cd kanban-Board
```

### 3. Run the application

Open `index.html` in your browser.

No backend server or database setup is required.

## Project Structure

```text
kanban-Board/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

*Adjust the structure above if your actual project uses different filenames or folders.*

## Future Improvements

- [ ] Add task priority levels.
- [ ] Implement task deadlines and due dates.
- [ ] Add search and filtering functionality.
- [ ] Introduce user authentication.
- [ ] Add backend integration for cloud-based task storage.
- [ ] Implement real-time synchronization across devices.

## Author

**Subhodip Chatterjee**

- GitHub: [Subhodip-007](https://github.com/Subhodip-007)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/subhodip-chatterjee-sc007by/)
- Portfolio: [Visit Portfolio](https://subhodip-007.github.io/Think-Voiger-/)

---

If you find this project useful, consider giving it a ⭐ on GitHub!

