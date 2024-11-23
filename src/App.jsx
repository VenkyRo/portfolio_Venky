import React from 'react'
import "./App.css";

import Navbar from './components/Navbar'
import Profile from "./components/Profile";
import About from './components/About';
import Experince from './components/Experince';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
   <Navbar></Navbar>
   <Profile></Profile>
   <About></About>
   <Experince></Experince>
   <Projects></Projects>
   <Contact></Contact>
   <Footer></Footer>
    
    </>
  )
}

export default App
    