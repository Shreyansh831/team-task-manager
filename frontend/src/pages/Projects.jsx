import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Website Redesign",
      description: "Redesign company website UI",
    },
    {
      title: "Mobile App",
      description: "Develop task manager mobile app",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Projects
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;