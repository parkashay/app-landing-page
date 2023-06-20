import React from 'react'

function TextView({text, fontSize}) {
  return (
    <div className='heading' style={{
      fontSize : `${fontSize}rem`
    }}>{text}</div>
  )
}

export default TextView