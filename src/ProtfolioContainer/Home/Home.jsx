import React from 'react'
import'./Home.css'
import Profile from './Profile'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div  id="home" className='home-container'>
      {/* <Navbar/> */}
        <Profile/>
        <Footer/>
    </div>
  )
}

export default Home