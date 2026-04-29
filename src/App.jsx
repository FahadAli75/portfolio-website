import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      {/* Add IDs for smooth scrolling */}
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
