import React from 'react'
import AboutContent from '../components/AboutContent'
import SectionHeading from '../components/SectionHeading'
function About() {
  return (
    <div className='about' id='about'>
        <div style={{
          marginBottom : '200px'
        }}>

          {/* Heading */}
        <SectionHeading text={'About Us'} fontSize={5} />
        </div>

        {/* About contents  */}
        <AboutContent />
    </div>
  )
}

export default About