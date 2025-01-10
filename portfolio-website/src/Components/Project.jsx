export default function Projects() {
  const projects = [
    { id: 1, name: "Project 1", description: "Description of Project 1" },
    { id: 2, name: "Project 2", description: "Description of Project 2" },
    { id: 3, name: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
