import React from "react";

const Dashboard = () => {
  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">
            Total Tasks
          </h2>

          <p className="text-4xl font-bold mt-2">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">
            Completed
          </h2>

          <p className="text-4xl font-bold text-green-500 mt-2">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">
            Pending
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-2">
            8
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">
            Overdue
          </h2>

          <p className="text-4xl font-bold text-red-500 mt-2">
            4
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;