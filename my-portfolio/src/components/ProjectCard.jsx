import React from "react";

function ProjectCard({ title, description, imageUrl, demoUrl, githubUrl }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="flex mt-4 space-x-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
