import React from 'react'
import Common from '../common/Common'
import Footer from '../common/Footer'
import webimg from '../images/landingpage.svg'

const Home = () => {
  return (
    <>
      <Common
        title1 = "Grow your Business"
        title2 = 'with our private master'
        title3 = 'minded hard developers'
        punchline = 'We are the team of talented developers making websites'
        visit ='/'
        imgsrc={webimg}
        btname = 'Get Started'
      />  
      <Footer/>  
    </>
  )
}

export default Home