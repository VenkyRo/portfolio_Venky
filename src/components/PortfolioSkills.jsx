import React from "react";


const skills = [
  {
    name: "HTML5",
    image: "/skills/html.png",
    github: "https://github.com/VenkyRo/JsLabs"
  },
  {
    name: "BootStrap",
    image: "/skills/boot.png",
    github: "https://github.com/VenkyRo"
  },
  {
    name: "JavaScript",
    image: "/skills/img.png",
    github: "https://github.com/VenkyRo/JsLabs"
  },
  {
    name: "ReactJS",
    image: "/skills/reactjs.png",
    github: "https://github.com/VenkyRo/JsLabs"
  },
  {
    name: "Node.js",
    image: "/skills/nodejs.png",
    github: "https://github.com/VenkyRo"
  },
  {
    name: "MongoDB",
    image: "/skills/mongodb.png",
    github: "https://github.com/VenkyRo/Backend_nodejs_Suby"
  },
  {
    name: "Spring Boot",
    image: "/skills/springboot.png",
    github: "https://github.com/VenkyRo"
  },
  {
    name: "Hibernate",
    image: "/skills/hibernate.png",
    github: "https://github.com/VenkyRo/JAVA_Hibernate"
  }
];

const PortfolioSkills = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <>
            <div className="skill-card" key={index}>
              <a href={skill.github} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                />
              </a>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
           
          </>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSkills;
