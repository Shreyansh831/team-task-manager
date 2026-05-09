function ProjectCard({ title, description }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        View Project
      </button>
    </div>
  );
}

export default ProjectCard;