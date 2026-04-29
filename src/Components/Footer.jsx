import React from "react";
import "./Index.css";
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
     <img src={logo} alt="logo" className="logo-img" />
      <div className="footer-left">
         
        <h2 className="footer-logo">Fahad</h2>

        <p className="footer-desc">
          Frontend Developer. <br />
          I create modern, responsive, and high-performance web apps. <br />
          Turning ideas into smooth digital experiences.
        </p>
      </div>

      <div className="footer-right">

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
 <br/><br/>
 <div className="footer-social">
          <a href="https://www.linkedin.com/in/fahad-ali-395a6030a/"><FaLinkedin /></a>
          <a href="https://github.com/FahadAli75"><FaGithub /></a>
          <a href="https://vercel.com/fahadali75s-projects"><SiVercel/></a>
        
        </div>
      </div>

    </footer>
  );
};

export default Footer;

