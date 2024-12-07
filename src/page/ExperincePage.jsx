import React from 'react'
import Navbar from '../components/Navbar'
import Experience from '../components/Experince'

const ExperincePage = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div id="experience" className="experience">
          <Experience></Experience>
        </div>
      </div>
    </>
  );
}

export default ExperincePage