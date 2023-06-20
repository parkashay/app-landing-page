import React from 'react'

function  Mobile ({height, width}) {
  return (
    <div className='mobile' style={{
        height : `${height}px`,
        width : `${width}px`,
        zIndex : '2',
    }}>
        phone
    </div>
  )
}

export default Mobile