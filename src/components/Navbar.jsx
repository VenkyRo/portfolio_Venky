import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-bar">
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <Link to="/">
          <div className="logo">VENKATESWARLU SIRISETTY</div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Certificates</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/follow">Follow</Link>
          </li>
          <li>
            <Link to="/skills">skills</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
        <Link to="/">
          <div className="logo">VENKATESWARLU SIRISETTY</div>
        </Link>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMenu}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/follow" onClick={toggleMenu}>
                Follow
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
