import React from 'react'
import mobile from '../img/mobile.png'
function  Mobile ({height, width}) {
  return (
    <div className='mobile' style={{
        height : `${height}px`,
        width : `${width}px`,
        zIndex : '2',
        overflow : 'hidden'
    }}>
        <img src={mobile} alt="" style={{
          height : '100%',
          width : '100%'
        }} />
    </div>
  )
}

export default Mobile