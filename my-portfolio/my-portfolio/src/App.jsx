// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Project from "./components/Project";
import Frontpage from "./components/frontpage";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Internship from "./components/Internship";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Frontpage />} />

        <Route path="/home" element={<Frontpage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<AboutMe />} />

        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
