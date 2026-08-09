# 🚀 Task Management System

A full-stack **Task Management System** built using the **MERN Stack**. The application allows users to create, manage, assign, track, and organize tasks efficiently with authentication, filtering, search, pagination, and dashboard statistics.

## 🌐 Live Demo

- **Frontend:** [Add your Vercel URL here](https://genlab-ecntq8qbd-sathyan-a-wbds-projects.vercel.app/)
- **Backend API:** [Add your Render URL here](https://genlab-2.onrender.com)

---

## 📌 Features

### 🔐 Authentication & Authorization

- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- User-specific task management
- Logout functionality

### 📋 Task Management

- Create tasks
- View tasks
- Update tasks
- Delete tasks
- Assign tasks to users
- Set task priority
- Set task status
- Set task due date
- Add task descriptions

### 📊 Dashboard

The dashboard displays:

- Total tasks
- Completed tasks
- Pending tasks
- In-progress tasks
- Overdue tasks

### 🔎 Search & Filtering

- Search tasks by title
- Filter by status
- Filter by priority
- Filter by assigned user
- Sort tasks
- Pagination

### 👥 User Management

- User-based task access
- Tasks are associated with the authenticated user
- Users can view and manage their assigned tasks

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- Redux Toolkit
- Axios
- React Hook Form
- Yup
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS

### Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 📂 Project Structure

```text
task-management-system/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── redux/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## 🗄️ Database Models

### User

```text
User
├── name
├── email
├── password
└── role
```

### Task

```text
Task
├── title
├── description
├── user
├── assignedTo
├── priority
├── status
├── dueDate
├── createdAt
└── updatedAt
```

---

## 📊 Task Status

Tasks can have the following statuses:

```text
Pending
   ↓
In Progress
   ↓
Completed
```

### Priority Levels

```text
Low
Medium
High
Urgent
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Tasks

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/tasks`     | Get user tasks      |
| POST   | `/api/tasks`     | Create a task       |
| GET    | `/api/tasks/:id` | Get a specific task |
| PUT    | `/api/tasks/:id` | Update a task       |
| DELETE | `/api/tasks/:id` | Delete a task       |

> API routes may vary depending on the final backend implementation.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-system.git
```

### 2. Navigate to the project

```bash
cd task-management-system
```

---

# 🖥️ Frontend Setup

Navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Open another terminal and navigate to the server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

Or:

```bash
npm start
```

Backend will run on:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

> Never commit `.env` files containing passwords, database credentials, API keys, or JWT secrets.

Add them to `.gitignore`:

```gitignore
.env
.env.local
node_modules
dist
```

---

## 🔄 Application Flow

```text
User
 │
 ▼
Register / Login
 │
 ▼
JWT Token
 │
 ▼
Protected Routes
 │
 ▼
Dashboard
 │
 ├── Create Task
 │
 ├── View Tasks
 │
 ├── Update Task
 │
 ├── Delete Task
 │
 ├── Search
 │
 ├── Filter
 │
 └── Pagination
 │
 ▼
MongoDB
```

---

## 🧠 Key Concepts Used

This project demonstrates practical knowledge of:

- REST API development
- CRUD operations
- JWT authentication
- Password hashing
- Protected routes
- Middleware
- MongoDB relationships
- Mongoose schemas
- React component architecture
- State management
- API integration with Axios
- Form validation
- Search and filtering
- Pagination
- Responsive UI
- Environment variables
- CORS configuration
- Deployment

---

## 🚀 Future Improvements

- [ ] Role-based access control
- [ ] Admin dashboard
- [ ] Project management
- [ ] Task comments
- [ ] File attachments
- [ ] Email notifications
- [ ] Real-time notifications using Socket.io
- [ ] Dark mode
- [ ] Drag-and-drop task management
- [ ] Task activity history
- [ ] Analytics and charts

---

## 🎯 Project Goal

The goal of this project is to build a practical task management platform while demonstrating full-stack development skills using the **MERN stack**.

It focuses on real-world concepts such as authentication, authorization, CRUD operations, database management, API development, state management, and deployment.

---

## 👨‍💻 Author

**Sathyan**

### Connect With Me

- GitHub: [github.com/sathyan-a-wbd](https://github.com/sathyan-a-wbd)
- LinkedIn: [linkedin.com/in/sathyan-sathya3011](https://www.linkedin.com/in/sathyan-sathya3011)
- Portfolio: [sathyandevportfolio.netlify.app](https://sathyandevportfolio.netlify.app/)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
