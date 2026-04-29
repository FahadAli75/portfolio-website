import React from 'react'
import "./Index.css";
import { FaCode, FaLaptopCode, FaReact, FaDatabase, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section className='about'>
      <div className="about-wrapper">

        <h2 className="about-title">About Me</h2>
        <p className="about-subtext">
          I'm a <span>Frontend Developer</span> who loves creating modern,
          responsive and high-performance web applications using React.
        </p>

        <div className="about-grid">

          <div className="about-box">
            <FaReact className="about-icon" />
            <h3>React Developer</h3>
            <p>Building reusable components with smooth and optimized UI.</p>
          </div>

          <div className="about-box">
            <FaLaptopCode className="about-icon" />
            <h3>Frontend Development</h3>
            <p>Responsive layouts using HTML, CSS, JavaScript & modern tools.</p>
          </div>

          <div className="about-box">
            <FaCode className="about-icon" />
            <h3>Clean Code</h3>
            <p>Well-structured, scalable and maintainable coding practices.</p>
          </div>

          <div className="about-box">
            <FaTools className="about-icon" />
            <h3>Tools & Others</h3>
            <p>
              Git & GitHub, Vercel / Netlify Deployment, VS Code, API Integration (Basic)
            </p>
          </div>

          <div className="about-box">
            <FaDatabase className="about-icon" />
            <h3>API Integration</h3>
            <p>Working with REST APIs and dynamic data handling.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;