import React from "react";

import Navbar from "../components/Navbar";

const CertificatePage = () => {
  const certificates = [
    { image: "/certificates/react.png" },
    { image: "/certificates/mern.png" },
    { image: "/certificates/py.png" },
    { image: "/certificates/sql.png" },
    { image: "/certificates/py.png" },
    { image: "/certificates/jscss.png" },
  ];

  return (
    <>
    <Navbar></Navbar>
      <div className="certificate-page">
        <h1>My Certificates</h1>
        <div className="card-container">
          {certificates.map((cert, index) => (
            <div className="card" key={index}>
              <div className="glass"></div>
              <div className="content">
                <img src={cert.image} alt={`Certificate ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CertificatePage;

