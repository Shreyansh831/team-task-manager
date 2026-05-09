import React from "react";

const Navbar = () => {
  return (

    <div className="bg-white shadow rounded-2xl p-5 flex justify-between items-center mb-8">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">
        Logout
      </button>

    </div>
  );
};

export default Navbar;