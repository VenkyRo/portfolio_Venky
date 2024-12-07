import React from "react";
import Navbar from "./Navbar";


const ProfileCard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="profile-card-wrapper">
        <div className="profile-card">
          {/* Profile Image */}
          <div className="profile-image">
            <img src="/assets/profile-pic.jpg" alt="Profile" />
          </div>
          {/* Name and Title */}
          <div className="profile-info">
            <h2>VENKATESWARLU SIRISETTY</h2>
            <h4>Full Stack Developer</h4>
          </div>
          {/* About Section */}
          <p className="about">
            I am a passionate Full Stack Developer skilled in crafting modern,
            scalable web applications. With expertise in front-end technologies
            like ReactJS and back-end frameworks like Node.js and Spring Boot, I
            bring ideas to life through efficient and innovative solutions. My
            focus lies in creating seamless user experiences and building robust
            APIs, utilizing tools like MongoDB, Express.js, and Docker.
            Dedicated to continuous learning, I thrive in dynamic environments,
            leveraging my MERN stack and Java Full Stack skills to deliver
            exceptional results
          </p>

          <div className="social-links">
            <a
              id="links"
              href="https://www.instagram.com/inocent_venky/"
              target="blank"
              className="social-icon"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              id="links"
              href="https://github.com/VenkyRo"
              target="blank"
              className="social-icon"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              id="links"
              href="https://www.linkedin.com/in/sirisetty-venkatesh-256bb8286/"
              target="blank"
              className="social-icon"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              id="links"
              href="https://www.facebook.com/profile.php?id=61554355917890"
              target="blank"
              className="social-icon"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              id="links"
              href="https://x.com/sirisettyv18172"
              target="blank"
              className="social-icon"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
          {/* Resume Button */}

          <button
            className="button-resume"
            type="button"
            onClick={() =>
              window.open("/assets/SIRISETTYVENKATESH_2024_RESUME.pdf")
            }
          >
            <span className="button__text">Resume</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                class="svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
