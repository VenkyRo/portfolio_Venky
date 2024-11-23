import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "E-Commerce Website",
      description: "A full-stack application for online shopping.",
      link: "#"
    },
    {
      name: "Blogify",
      description: "A blogging platform where I upload new blogs daily.",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/ecom.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/VenkyRo/E-Commerce-React",
                    "_blank"
                  )
                }
              >
                Github
              </button>

              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://e-commerce-react-ochre.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/swigy.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/VenkyRo/suby_react_frontend",
                    "_blank"
                  )
                }
              >
                Github
              </button>

              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://suby-react-frontend.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/wed.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/VenkyRo/firstproject/tree/main/OpenWeather",
                    "_blank"
                  )
                }
              >
                Github
              </button>

              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://suby-react-frontend.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>
  );
};

export default Projects;
