import React from "react";
import checkmarkIcon from "/assets/checkmark.png";
import arrowIcon from "/assets/arrow.png";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development Section */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS3</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript ES6+</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Redux</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              {/* Add other frontend skills similarly */}
            </div>
          </div>

          {/* Backend Development Section */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MY SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>RESTful APIs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Cloud Services</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              {/* Add other backend skills similarly */}
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-navigate"
        onClick={() => (window.location.href = "./#projects")}
      >
        View Projects
      </button>
    </section>
  );
};

export default Experience;
