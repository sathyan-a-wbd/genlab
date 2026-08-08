import React, { useState } from "react";
import { LogOut, CheckSquare, LogIn } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-500 bg-blue-600 px-4 py-3 shadow-sm sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
            <CheckSquare size={21} className="text-white" strokeWidth={2.2} />
          </div>

          <h1 className="poppins text-lg font-semibold tracking-tight text-white sm:text-xl">
            Task Manager
          </h1>
        </div>

        {/* User / Authentication */}
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-medium text-blue-50 sm:block">
            Welcome back!
          </span>

          {token ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold tracking-wide text-black transition hover:bg-blue-50 md:px-6 md:text-lg"
            >
              <LogOut size={17} />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold tracking-wide text-black transition hover:bg-blue-50 md:px-6 md:text-lg"
            >
              <LogIn size={17} />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
