import React from 'react'

function TextView({text, fontSize}) {
  return (
    <div className='textview' style={{
      fontSize : `${fontSize}rem`      //getting the font size as a prop and implementing it 
    }}>{text}</div>
  )
}

export default TextView