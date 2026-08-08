import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import api from "../services/api";
import { Navigate, useNavigate } from "react-router-dom";

const Tasklist = ({ tasks, setTasks, loading }) => {
  const navigate = useNavigate();

  const handleEdit = (task) => {
    navigate(`edit-task/${task._id}`);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);

      // Remove deleted task from UI
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  if (loading) {
    return (
      <section className="p-4">
        <p className="text-gray-500">Loading tasks...</p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 p-4 lg:grid-cols-2">
      {tasks.length === 0 ? (
        <div className="col-span-full py-10 text-center">
          <h1 className="text-lg font-semibold text-gray-600">
            No tasks found
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Create a task to get started.
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </section>
  );
};

export default Tasklist;
