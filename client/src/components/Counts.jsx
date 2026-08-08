import React from "react";
import CountCard from "./CountCard";

const Counts = ({ tasks }) => {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.status === "completed").length;

  const pending = tasks.filter((task) => task.status === "pending").length;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-10">
      <CountCard text="Total Tasks" count={total} />
      <CountCard text="Completed" count={completed} />
      <CountCard text="Pending" count={pending} />
    </section>
  );
};

export default Counts;
