import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

    <div className="w-64 min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-10">
        Team Task
      </h1>

      <ul className="space-y-6 text-lg">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link to="/tasks">
            Tasks
          </Link>
        </li>

        <li>
          <Link to="/team">
            Team
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;