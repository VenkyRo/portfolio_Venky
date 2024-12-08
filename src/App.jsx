import React from 'react'
import "./App.css";
import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import './cert.css'
import './skill.css'


import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './page/AboutPage';

import ProjectsPage from './page/ProjectsPage';
import ContactPage from './page/ContactPage';
import ProfileCardPage from './page/ProfileCardPage';

import CertificatePage from './page/CertificatePage';
import PortfolioSkillsPage from './page/PortfolioSkillsPage';


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route
            path="/experience"
            element={<CertificatePage></CertificatePage>}
          ></Route>
          <Route
            path="/projects"
            element={<ProjectsPage></ProjectsPage>}
          ></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="/follow" element={<ProfileCardPage></ProfileCardPage>}></Route>
          <Route path="/skills" element={<PortfolioSkillsPage></PortfolioSkillsPage>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
    