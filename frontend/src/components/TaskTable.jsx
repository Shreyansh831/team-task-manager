function TaskTable() {
  const tasks = [
    {
      title: "Create Login UI",
      status: "Pending",
      priority: "High",
    },
    {
      title: "Setup Backend",
      status: "Completed",
      priority: "Medium",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Task</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{task.title}</td>
              <td className="p-3">{task.status}</td>
              <td className="p-3">{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;