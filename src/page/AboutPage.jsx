import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'


const AboutPage = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div>
          <About></About>
        </div>
      </div>
    </>
  );
}

export default AboutPage