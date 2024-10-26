import React from "react";
import shapeOne from "../assets/shape-1.png";

const experiences = [
  {
    title: "AI-ML Intern",
    company: "IIT Madras",
    location: "Chennai, India",
    period: "June 2024 - August 2024",
    tasks: [
      "Developed deep learning models with Keras and TensorFlow.",
      "Achieved over 98% accuracy in detecting partial discharge patterns.",
      "Collaborated with a team to analyze and interpret results.",
    ],
  },
  {
    title: "TNP Website Coordinator",
    company: "NIT Mizoram",
    location: "Aizawl, India",
    period: "March - Current",
    tasks: ["Collaborated with TNP team to create TNP website for the college"],
  },
];

const Internship = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen flex flex-col justify-center p-8"
      id="experience"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Internship & Experience
      </h2>
      <p className="text-xl text-gray-300 text-center mb-12">
        My <span className="text-purple-400">Journey</span>
      </p>

      {/* Experience Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 relative z-10">
        {experiences.map((experience, index) => (
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:scale-105 hover:bg-gray-700 relative overflow-hidden"
            key={index}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700 via-transparent opacity-10"></div>
            <h3 className="text-2xl font-semibold text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-medium">{experience.company}</span> -{" "}
              {experience.location}
            </p>
            <p className="text-gray-500 mb-4">{experience.period}</p>
            <ul className="text-gray-400 space-y-2 pl-4 border-l-4 border-purple-400">
              {experience.tasks.map((task, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 font-bold mr-2">•</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-20 w-24 h-24 md:w-32 md:h-32 opacity-50 animate-pulse">
        <img src={shapeOne} alt="decorative shape" className="w-full h-full" />
      </div>
      <div className="absolute right-0 top-10 w-32 h-32 md:w-40 md:h-40 opacity-20 animate-spin-slow">
        <img src={shapeOne} alt="decorative shape" className="w-full h-full" />
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 pb-8 left-1/2 transform -translate-x-1/2 text-white opacity-5">
        <span className="text-8xl lg:text-9xl font-extrabold">Experience</span>
      </div>
    </section>
  );
};

export default Internship;
