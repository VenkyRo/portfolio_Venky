import React from "react";



const About = () => (
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img
          src="./assets/profile-pic-2.jpg"
          alt="Profile picture"
          className="about-pic"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img
              src="./assets/experience.png"
              alt="Experience icon"
              className="icon"
            />
            <h3>Experience</h3>
            <p>
              Fresher <br />
              Full Stack Development
            </p>
          </div>
          <div className="details-container">
            <img
              src="./assets/education.png"
              alt="Education icon"
              className="icon"
            />
            <h3>Education</h3>
            <p>
              Bachelor of Technology Degree
              <br />
              Electronics and Communication Engineering
            </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Hello! I’m Venkateswarlu, a dedicated full stack developer with a
            passion for crafting innovative web applications. With a strong
            foundation in both front-end and back-end technologies, I enjoy the
            challenge of bridging design and functionality to create seamless
            user experiences. I hold a B-Tech in Electronic Communication
            Engineering and have honed my skills in languages and frameworks
            such as HTML, CSS, JavaScript, React, Node.js, and more. I thrive on
            problem-solving and continuously seek to learn new technologies to
            stay ahead in this ever-evolving field. When I’m not coding, you can
            find me [mention any hobbies or interests, e.g., exploring new tech
            trends, contributing to open-source projects, or enjoying outdoor
            adventures]. I’m excited to collaborate on meaningful projects and
            bring your ideas to life
          </p>
        </div>
      </div>
    </div>
    
  </section>
);

export default About;
