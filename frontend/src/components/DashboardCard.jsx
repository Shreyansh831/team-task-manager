import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {

  return (

    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <DashboardCard
            title="Total Tasks"
            value="24"
            color="text-black"
          />

          <DashboardCard
            title="Completed"
            value="12"
            color="text-green-500"
          />

          <DashboardCard
            title="Pending"
            value="8"
            color="text-yellow-500"
          />

          <DashboardCard
            title="Overdue"
            value="4"
            color="text-red-500"
          />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;