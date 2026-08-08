import React from "react";

const CountCard = ({ text, count }) => {
  return (
    <section className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{text}</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
          <span className="text-lg font-semibold text-gray-700">{count}</span>
        </div>
      </div>
    </section>
  );
};

export default CountCard;
