import React from 'react'
import Heading from '../components/TextView'
import AboutContent from '../components/AboutContent'
import TextView from '../components/TextView'
function About() {
  return (
    <div className='about'>
        <div style={{
          marginBottom : '200px'
        }}>
        <TextView text={'About Us'} fontSize={9} />
        </div>
        <AboutContent />
    </div>
  )
}

export default About