import React from "react";
import "./Index.css";
import PRO3 from "../assets/PRO3.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* TEXT SIDE */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Fahad Ali</span>
          </h1>

          <h3>Frontend Developer | React | UI/UX</h3>

          <p>
            I create clean, modern, and high-performance front-end experiences
            with a focus on React and polished UI/UX.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="#contact">
              <button className="btn">Hire Me</button>
            </a>

            <a href="#projects">
              <button className="btn">See Projects</button>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/fahad-ali-395a6030a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/FahadAli75"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://vercel.com/fahadali75s-projects"
              target="_blank"
              rel="noreferrer"
              aria-label="Vercel"
            >
              <SiVercel/>
              
            </a>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="hero-image">
          <img src={PRO3} alt="Fahad Ali Profile" />
        </div>

      </div>
    </section>
  );
};

export default Hero;