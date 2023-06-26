import React from 'react'

function SectionHeading({text, fontSize}) {
  return (
    <div className='section-heading' style={{
        fontSize : `${fontSize}rem`      //getting the font size as a prop and implementing it 
      }}>{text}</div>
  )
}

export default SectionHeading