import React from "react";
import TaskCreater from "../components/TaskCreater";
import Tasklist from "../components/Tasklist";

import Counts from "../components/Counts";

const Home = ({ tasks, setTasks, loading }) => {
  return (
    <section>
      <Counts tasks={tasks} />
      <TaskCreater />

      <Tasklist tasks={tasks} setTasks={setTasks} loading={loading} />
    </section>
  );
};

export default Home;
