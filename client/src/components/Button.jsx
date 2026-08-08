import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 text-sm md:text-lg  bg-white text-black font-bold rounded-xl px-6 text-center  tracking-wide"
    >
      {text}
    </button>
  );
};

export default Button;
