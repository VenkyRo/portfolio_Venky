import React from 'react'
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <>
      <div className="Top-Bar">
        <Navbar></Navbar>
        <div>
          <Profile></Profile>
        </div>
      </div>
    </>
  );
}

export default ProfilePage