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
        <TextView text={data.heroHeading} fontSize={7} />
        <Qoutation quotation={data.quote} />
      </div>
    </div>
  )
}

export default Landing