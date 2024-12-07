import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <>
      <div className="nav-bar">
        <nav id="desktop-nav">
          <Link to="/" >
            <div className="logo" >VENKATESWARLU SIRISETTY</div>
          </Link>
          <div>
            <ul className="nav-links">
              <Link to="/about">
                <li>
                  <a href="#about">About</a>
                </li>
              </Link>
              <Link to="/experience">
                <li>
                  <a href="#experience">Experience</a>
                </li>
              </Link>
              <Link to="/projects">
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </Link>
              <Link to="/follow">
                <li>
                  <a href="#contact">Follow</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>

        <nav id="hamburger-nav">
          <Link to="/">
            <div className="logo">VENKATESWARLU SIRISETTY</div>
          </Link>
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="menu-links">
              <li>
                <a href="/about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="/projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/follow" onClick={toggleMenu}>
                  Follow
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
