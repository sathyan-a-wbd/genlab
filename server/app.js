const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use(
  cors({
    origin: [
      "https://genlab-ecntq8qbd-sathyan-a-wbds-projects.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "50mb",
  }),
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Task Management API is running",
  });
});

module.exports = app;
