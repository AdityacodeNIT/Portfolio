import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons
import shapeOne from "../assets/shape-1.png";

const AboutMe = () => {
  return (
    <section
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center min-h-screen relative"
      id="about"
    >
      <div className="container mx-auto flex flex-col items-center p-8 relative z-10">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-400 text-center mb-10">
          My <span className="text-purple-500">Journey</span>
        </p>

        {/* About Card */}
        <div className="bg-gray-800 bg-opacity-80 p-10 md:p-16 rounded-lg shadow-lg max-w-3xl w-full transition-transform duration-300 ">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Aditya Srivastav
          </h3>
          <p className="text-gray-300 mb-2">
            <strong>Email:</strong> bt22ec036@nitmz.ac.in
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Phone:</strong> 07307675982
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Location:</strong> Sultanpur, Uttar Pradesh, India
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Results-driven software developer specializing in JavaScript, React,
            Node.js, and MongoDB. I successfully developed an e-commerce
            platform that increased user engagement by 30% and a training and
            placement website that improved job placement rates by 20%. With
            experience in machine learning and deep learning from my internship
            at IIT Madras, I implemented predictive models that enhanced
            data-driven decision-making. I'm passionate about creating scalable,
            user-friendly applications and eager to bring innovative solutions
            to a collaborative development team.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 z-20 relative">
            <a
              href="https://github.com/AdityacodeNit" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/aditya-srivastav-125744276" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com/your-instagram-username" // Your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/@adityas46043979" // Your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute left-0 w-24 h-24 md:w-32 md:h-32 opacity-60 animate-pulse">
          <img
            src={shapeOne}
            alt="decorative shape"
            className="w-full h-full"
          />
        </div>
        <div className="absolute right-0 top-10 w-24 h-24 md:w-32 md:h-32 opacity-40 animate-spin-slow">
          <img
            src={shapeOne}
            alt="decorative shape"
            className="w-full h-full"
          />
        </div>

        {/* Background Text */}
        <div className="absolute bottom-0 pb-8 left-1/2 transform -translate-x-1/2 text-white opacity-10">
          <span className="text-8xl lg:text-9xl font-extrabold">About Me</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
