import React from 'react'
import Qoutation from '../components/Qoutation'
import { data } from '../data.js'
import HeroHeading from '../components/HeroHeading'
function Landing() {
  return (
    <div className='landing' id='home'>
      <div style={{
        width: '60vw'
      }}>

        {/* Webpage Hero section Heading text */}
        <HeroHeading text={'Smart Home Application'} fontSize={6} />
        
        {/* Small description under the heading */}
        <Qoutation quotation={data.quote} />

        {/* Social icons */}
        <div className="icons">
          <a href={data.facebook}><i class="icon fa-brands fa-facebook"></i></a>
          <a href={data.instagram}><i class=" icon fa-brands fa-instagram"></i></a>
          <a href={data.twitter}><i class=" icon fa-brands fa-twitter"></i></a>
          <a href={data.linkedIn}><i class="icon fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Landing