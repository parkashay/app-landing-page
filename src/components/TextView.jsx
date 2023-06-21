import React from 'react'

function TextView({text, fontSize}) {
  return (
    <div className='textview' style={{
      fontSize : `${fontSize}rem`
    }}>{text}</div>
  )
}

export default TextView