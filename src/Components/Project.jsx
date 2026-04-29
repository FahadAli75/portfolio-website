import React from 'react';
import "../Index.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const Project = () => {
  const data = [
  {
    title: "Weather App",
    desc: "Real-time weather data fetching using API.",
    tech: [<FaReact />, <FaJs />, <FaCss3Alt />]
  },
  {
    title: "E-commerce Website",
    desc: "Modern shopping website with cart system.",
    tech: [<FaReact />, <FaJs />, <FaCss3Alt />]
  },
  {
    title: "Food Delivery Website",
    desc: "Food ordering platform with smooth UI.",
    tech: [<FaReact />, <FaHtml5 />, <FaCss3Alt />]
  },
  {
    title: "Paste App",
    desc: "Save and share text instantly.",
    tech: [<FaReact />, <FaHtml5 />, <FaCss3Alt />]
  },
];

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {data.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((icon, index) => (
                <span className="tech-icon" key={index}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;