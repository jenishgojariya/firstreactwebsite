import React from 'react'
import Common from '../common/Common'
import Footer from '../common/Footer'
import webimg from '../images/about.svg'

const About = () => {
  return (
    <>
    <div id='page'>
     <Common
        title1 = "Is your Business"
        title2 = 'struggling finding '
        title3 = ' customers and pace '
        punchline = 'We are the team of talented storytelling website makers'
        visit ='about'
        imgsrc = {webimg} 
        btname = 'Join Now'
      /> 
      <Footer/> 
    </div>
    </>
  )
}

export default About