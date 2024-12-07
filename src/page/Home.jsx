import React from 'react'
import ProfilePage from './ProfilePage';
import LatestProjects from '../components/LatestProjects';
import Footer from '../components/Footer';
import FooterPage from './FooterPage';


const Home = () => {
  return (
    <>
      <div>
        <ProfilePage></ProfilePage>
        <LatestProjects></LatestProjects>
        <FooterPage></FooterPage>
      </div>
    </>
  );
}

export default Home