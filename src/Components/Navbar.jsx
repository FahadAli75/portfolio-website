import React from 'react'
import "./Index.css";
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <nav className='navbar'>
  <div className="logo-wrap">
    <img src={logo} alt="logo" className="logo-img" />
    <h2 className='logo'>Fahad Ali</h2>
  </div>

  <ul className='nav-links'>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

</nav>
  )
}

export default Navbar;
