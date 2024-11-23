import React from "react";


const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src="./assets/profile-pic.jpg"
          alt="VENKATESWARLU SIRISETTY profile"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">VENKATESWARLU SIRISETTY</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() =>
              window.open("/assets/SIRISETTYVENKATESH_2024_RESUME.pdf")
            }
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/sirisetty-venkatesh-256bb8286/")
            }
          />
          <img
            src="/assets/github.png"
            alt="GitHub"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://github.com/VenkyRo?tab=repositories")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
