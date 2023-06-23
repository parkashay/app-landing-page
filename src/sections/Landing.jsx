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
          <a href='#' class="icon fa-brands fa-facebook"></a>
          <a href='#' class=" icon fa-brands fa-instagram"></a>
          <a href='#' class=" icon fa-brands fa-twitter"></a>
          <a href='#' class="icon fa-brands fa-linkedin"></a>
        </div>
      </div>
    </div>
  )
}

export default Landing