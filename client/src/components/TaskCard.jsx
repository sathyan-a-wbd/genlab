import React from "react";
import { Pencil, Trash2, CalendarDays } from "lucide-react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const priorityStyles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-amber-50 text-amber-600",
    Low: "bg-green-50 text-green-600",
  };

  const statusStyles = {
    Completed: "bg-green-50 text-green-700",
    "In Progress": "bg-blue-50 text-blue-700",
    Pending: "bg-slate-100 text-slate-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Title & Priority */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{task.title}</h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {task.description}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Status & Date */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusStyles[task.status]
          }`}
        >
          {task.status}
        </span>

        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <CalendarDays size={16} />
          {task.dueDate}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-end gap-2 border-t border-slate-100 pt-4">
        <button
          onClick={() => onEdit(task)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          <Pencil size={16} />
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
