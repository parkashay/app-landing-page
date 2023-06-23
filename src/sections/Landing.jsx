import React from 'react'
import Qoutation from '../components/Qoutation'
import { data } from '../data.js'
import TextView from '../components/TextView'
function Landing() {
  return (
    <div className='landing'>
      <div style={{
        width: '60vw'
      }}>
        <TextView text={data.heroHeading} fontSize={6} />
        <Qoutation quotation={data.quote} />
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