import React from 'react'
import Qoutation from '../components/Qoutation'
import { data } from '../data.js'
import TextView from '../components/TextView'
function Landing() {
  return (
    <div className='landing'>
      <div style={{
        width: '1200px'
      }}>
        <TextView text={data.heroHeading} fontSize={9} />
        <Qoutation quotation={data.quote} />
      </div>
    </div>
  )
}

export default Landing