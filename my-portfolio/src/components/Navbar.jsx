// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-6 bg-gradient-to-r justify-center flex from-blue-800 to-purple-800 text-white shadow-md">
      <div className="w-[50%] align-middle">
        <ul className="flex justify-around items-center space-x-8">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
