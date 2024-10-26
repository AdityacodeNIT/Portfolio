import React, { useEffect, useState } from "react";
import { links } from "../Data";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
import { Link } from "react-router-dom";
import shapeOne from "../assets/shape-1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-gray-800" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-5 md:px-10">
        <img
          src={shapeOne}
          alt="Background Shape"
          className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 -translate-y-1/2"
        />

        <button
          onClick={toggleTheme}
          className="text-xl text-white mr-auto"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <BsMoon /> : <BsSun />}
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ name, path, external }, index) => (
            <li key={index}>
              {external ? (
                <a
                  className="text-white hover:text-gray-300 transition-colors flex items-center"
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name === "GitHub" ? <FaGithub className="mr-1" /> : null}
                  {name === "LinkedIn" ? <FaLinkedin className="mr-1" /> : null}
                  {name}
                </a>
              ) : (
                <Link
                  className="text-white hover:text-gray-300 transition-colors"
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-8 h-0.5 bg-white mb-1 transition-transform ${
              isMenuOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white mb-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white ${
              isMenuOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile menu items: Only shown when `isMenuOpen` is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-6 transition-all duration-300">
          <ul className="flex flex-col items-center gap-6">
            {links.map(({ name, path, external }, index) => (
              <li key={index}>
                {external ? (
                  <a
                    className="text-white hover:text-gray-300 transition-colors flex items-center"
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name === "GitHub" ? <FaGithub className="mr-1" /> : null}
                    {name === "LinkedIn" ? (
                      <FaLinkedin className="mr-1" />
                    ) : null}
                    {name}
                  </a>
                ) : (
                  <Link
                    className="text-white hover:text-gray-300 transition-colors"
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
