import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaCircle,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profileImg from "../assets/myImage.png";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";
import CV from "../assets/AdityaCV (3).pdf";

const Home = () => {
  return (
    <section
      className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-black min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-800 opacity-20 z-0" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 relative z-10">
        {/* Left Section - Text and Details */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative">
          <p className="text-white text-sm md:text-lg font-light mb-2">
            Hello, <span className="font-semibold">My Name Is</span>
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white my-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              Aditya Srivastav
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl mb-6 leading-relaxed">
            I am a <span className="font-semibold">Full-Stack Developer</span>{" "}
            creating visually appealing, responsive applications.
          </p>

          <a
            download
            href={CV}
            className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-transform duration-500 hover:bg-pink-600 hover:shadow-lg transform hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Right Section - Image with Parallax Effects */}
        <div className="md:w-1/2 flex flex-col items-center justify-center relative pt-10 md:pt-0">
          <div className="relative w-52 h-52 md:w-96 md:h-96 bg-gradient-to-br from-gray-600 to-slate-800 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-110 transform hover:rotate-3">
            <img
              src={profileImg}
              alt="Aditya Srivastav"
              className="absolute bottom-0 w-full h-full object-cover transform scale-100"
            />
          </div>

          {/* Social Media Icons - Stacked Below on Small Screens */}
          <div className="flex space-x-4 mt-4 md:mt-6">
            <a
              href="https://github.com/AdityacodeNit" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://linkedin.com/in/aditya-srivastav-125744276" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://twitter.com/@adityas46043979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
          </div>

          {/* Geometric and Shape Decorations */}
          <img
            src={shapeOne}
            alt="Decorative Shape"
            className="absolute w-24 h-24 md:w-32 md:h-32 top-0 right-10 transform rotate-45 opacity-70 animate-pulse hidden md:flex"
          />
          <img
            src={shapeTwo}
            alt="Decorative Shape"
            className="absolute w-20 h-20 md:w-28 md:h-28 bottom-5 left-5 transform -rotate-45 opacity-60 animate-pulse hidden md:flex"
          />
          <img
            src={shapeTwo}
            alt="Decorative Shape"
            className="absolute w-16 h-16 md:w-24 md:h-24 top-10 right-5 transform rotate-45 opacity-70 animate-pulse delay-200 hidden md:block"
          />

          {/* Diagonal Pattern of Circles - Adjusted for Smaller Screens */}
          <div className="absolute bottom-10 left-10 md:flex flex-wrap gap-3 opacity-30 transform translate-y-10 rotate-45 hidden ">
            {Array.from({ length: 12 }).map((_, index) => (
              <FaCircle
                key={index}
                className={`text-pink-500 ${
                  index % 2 ? "text-blue-400" : "text-yellow-400"
                } text-xs sm:text-sm md:text-md`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  width: "1.5rem", // Adjust size
                  height: "1.5rem", // Adjust size
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute inset-0 flex items-end justify-center space-x-8 mb-20 opacity-30 z-0">
        <div className="w-24 h-24 md:w-36 md:h-36 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="w-32 h-32 md:w-44 md:h-44 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full blur-3xl animate-spin-slower"></div>
      </div>
    </section>
  );
};

export default Home;
