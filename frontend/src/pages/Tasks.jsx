import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskTable from "../components/TaskTable";

function Tasks() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Tasks
          </h1>

          <TaskTable />
        </div>
      </div>
    </div>
  );
}

export default Tasks;