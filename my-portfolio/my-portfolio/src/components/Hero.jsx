import React from "react";
import myImage from "../assets/myImage.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16 relative">
      <img
        src={myImage}
        alt="Aditya Srivastav"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
                   transition-transform duration-500 hover:scale-110"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Aditya Srivastav
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive websites.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
                     transform transition-transform duration-500 hover:scale-110 px-4 py-2 rounded-full"
        >
          Contact Me
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                     transform transition-transform duration-500 hover:scale-110 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-400 animate-pulse"></div>
    </div>
  );
};

export default Hero;
