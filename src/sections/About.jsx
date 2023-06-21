import React from 'react'
import AboutContent from '../components/AboutContent'
import TextView from '../components/TextView'
function About() {
  return (
    <div className='about'>
        <div style={{
          marginBottom : '200px'
        }}>
        <TextView text={'About Us'} fontSize={7} />
        </div>
        <AboutContent />
    </div>
  )
}

export default About