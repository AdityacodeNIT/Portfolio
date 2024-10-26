import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import tnp from "../assets/tnp.png";

function Project() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projectData = [
    {
      title: "E-Commerce Website",
      description:
        "Developed a full-stack online stationery shopping platform with JavaScript, React, Node.js, and MongoDB. Implemented responsive design, API optimization, and advanced MongoDB aggregations. Features include Cart, Order, Review, Wishlist, Login, Payment Gateway integration, and order management.",
      imageUrl: "/unnamed.png",
      demoUrl: "https://adyog-8tdv.vercel.app/",
      githubUrl: "https://github.com/AdityacodeNIT/adyog",
    },
    {
      title: "Word Counter Web Application",
      description:
        "An intuitive text analytics tool that provides real-time word and character counts, sentence analysis, and estimated reading time. Users can easily convert text to uppercase, lowercase, or capitalize each word, as well as apply italic formatting. Designed for responsiveness, it enhances writing efficiency effortlessly.",
      imageUrl: "/unnamed2.png",
      demoUrl: "https://adyog-8tdv.vercel.app/",
      githubUrl: "https://github.com/AdityacodeNIT/reactProject",
    },
    {
      title: "TNP Website NIT Mizoram",
      description:
        "Collaborated with a team to create a college training and placement website, enabling companies to post job opportunities and showcase recruitment events. Enhanced engagement features streamline connections between recruiters and students, boosting visibility and accessibility of job postings for increased placements.",
      imageUrl: tnp,
      demoUrl: "https://nitmztnp.netlify.app/",
      githubUrl: "https://github.com/NIT-MZ/TNP-Web",
    },
  ];

  const toggleDescription = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-8 md:py-16 h-auto"
      id="projects"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-5xl md:text-9xl font-extrabold opacity-10 pointer-events-none select-none">
        Projects
      </div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl text-center font-extrabold mb-6 md:mb-10 text-white tracking-wide relative z-10">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 overflow-y-auto h-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => toggleDescription(index)}
          >
            <ProjectCard {...project} />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white flex flex-col items-center justify-center p-4 md:p-6 transition-opacity duration-300 ease-in-out">
                <h3 className="text-sm md:text-2xl font-semibold mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-center mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
