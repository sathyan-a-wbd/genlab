import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const TaskCreater = () => {
  return (
    <section className="flex w-full flex-col gap-4 border-b border-slate-200 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
      {/* Heading */}
      <div>
        <h1 className="poppins text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          My Tasks
        </h1>

        <p className="poppins mt-1 text-sm text-slate-500 sm:text-base">
          Manage and track your tasks efficiently.
        </p>
      </div>

      {/* Create Button */}
      <Link to={"create-task"}>
        <button
          type="button"
          className="poppins flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
        >
          <Plus size={19} strokeWidth={2.5} />
          Create Task
        </button>
      </Link>
    </section>
  );
};

export default TaskCreater;
