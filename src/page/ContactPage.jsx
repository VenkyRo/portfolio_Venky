import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
    <div>
        <Navbar></Navbar>
        <div>
            <Contact></Contact>
        </div>
    </div>
    <Footer></Footer>
    </>

  )
}

export default ContactPage