import React from "react";
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "SplashWheels",
      description:
        "SplashWheels is an online platform that makes booking water campers easy and convenient. Choose your favorite water camper, book it online, and get it delivered right to your doorstep. With affordable pricing, a variety of options, and reliable customer support, SplashWheels ensures your water adventure is seamless and hassle-free",
      image: "/images/Splashwheels.png",
      tags: ["React", "JavaScript", "HTML", "CSS", "AWS", "TailwindCSS"],
    },
    {
      id: 2,
      name: "RepairGo",
      description:
        "Repair Go is your one-stop solution for hassle-free mobile repair services. With our platform, you can book mobile repairs online, and our expert technicians will visit your home to fix your device. Whether it's a broken screen, battery replacement, or any other issue, we ensure quick and reliable service at your convenience",
      image: "/images/RepairGo.png",
      tags: ["HTML", "CSS", "Javascript", "React", "AWS"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-100 to-gray-200 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap space-x-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                See More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
