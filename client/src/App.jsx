import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTask from "./pages/CreateTask";
import EditTasks from "./pages/EditTasks";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./services/api";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [taskCount, setCount] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const res = await api.get("/tasks");
        setTasks(res.data.tasks);

        setCount(res.data.taskCount);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home tasks={tasks} setTasks={setTasks} loading={loading} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/edit-task" element={<EditTasks task={tasks} />} />
        <Route path="/edit-task/:id" element={<EditTasks />} />
      </Routes>
    </>
  );
};

export default App;
