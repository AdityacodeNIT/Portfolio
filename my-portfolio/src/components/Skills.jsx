import React from "react";
import { skills } from "../Data";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";

const Skills = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16 px-8 overflow-hidden"
      id="skills"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Professional Skills
      </h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {skills.map(({ name, percentage, description }, index) => (
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            key={index}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <span className="text-white font-bold">{percentage}%</span>
            </div>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="bg-gray-600 h-2 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${percentage}%`,
                  background: "linear-gradient(90deg, #f59e0b, #d946ef)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Background Decorative Shapes */}
      <img
        src={shapeOne}
        alt="decorative shape"
        className="absolute top-16 left-4 w-20 h-20 opacity-50 animate-spin-slow"
      />
      <img
        src={shapeTwo}
        alt="decorative shape"
        className="absolute top-1/3 right-0 w-24 h-24 opacity-50 animate-bounce delay-1000"
      />
      <img
        src={shapeOne}
        alt="decorative shape"
        className="absolute bottom-10 left-1/3 w-32 h-32 opacity-40 animate-pulse"
      />

      {/* Background Text */}
      <div className="absolute bottom-0 pb-8 left-1/2 transform -translate-x-1/2 text-white opacity-5">
        <span className="text-8xl lg:text-9xl font-extrabold">Skills</span>
      </div>
    </section>
  );
};

export default Skills;
