import { ArrowLeft, CalendarDays, FileText, Flag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/api";

const taskSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters")
    .required("Task title is required"),

  description: yup
    .string()
    .max(500, "Description cannot exceed 500 characters")
    .required("Description is required"),

  priority: yup
    .string()
    .oneOf(["low", "medium", "high"])
    .required("Priority is required"),

  status: yup
    .string()
    .oneOf(["pending", "in-progress", "completed"])
    .required("Status is required"),

  dueDate: yup
    .date()
    .typeError("Please select a valid date")
    .required("Due date is required"),
});

const CreateTask = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      priority: "medium",
      status: "pending",
    },
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/tasks", data);

      navigate("/");
    } catch (error) {
      console.error(error.response?.data?.message || "Failed to create task");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back Button */}
        <Link
          to="/"
          className="poppins mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-6">
          <h1 className="poppins text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Create Task
          </h1>

          <p className="poppins mt-1 text-sm text-slate-500 sm:text-base">
            Create a new task and keep your work organized.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <label className="poppins mb-2 block text-sm font-medium text-slate-700">
                Task Title
              </label>

              <div className="relative">
                <FileText
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Enter task title"
                  {...register("title")}
                  className={`poppins w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 ${
                    errors.title
                      ? "border-red-300 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                />
              </div>

              {errors.title && (
                <p className="poppins mt-1.5 text-xs text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="poppins mb-2 block text-sm font-medium text-slate-700">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe your task..."
                {...register("description")}
                className={`poppins w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 ${
                  errors.description
                    ? "border-red-300 focus:ring-2 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />

              {errors.description && (
                <p className="poppins mt-1.5 text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Priority + Status */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Priority */}
              <div>
                <label className="poppins mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Flag size={16} />
                  Priority
                </label>

                <select
                  {...register("priority")}
                  className="poppins w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

                {errors.priority && (
                  <p className="poppins mt-1.5 text-xs text-red-500">
                    {errors.priority.message}
                  </p>
                )}
              </div>

              {/* Status */}
              <div>
                <label className="poppins mb-2 block text-sm font-medium text-slate-700">
                  Status
                </label>

                <select
                  {...register("status")}
                  className="poppins w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>

                {errors.status && (
                  <p className="poppins mt-1.5 text-xs text-red-500">
                    {errors.status.message}
                  </p>
                )}
              </div>
            </div>

            {/* Due Date */}
            <div>
              <label className="poppins mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <CalendarDays size={16} />
                Due Date
              </label>

              <input
                type="date"
                {...register("dueDate")}
                className={`poppins w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 outline-none transition ${
                  errors.dueDate
                    ? "border-red-300 focus:ring-2 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />

              {errors.dueDate && (
                <p className="poppins mt-1.5 text-xs text-red-500">
                  {errors.dueDate.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
              <Link
                to="/dashboard"
                className="poppins flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="poppins rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating..." : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateTask;
