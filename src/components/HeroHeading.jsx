import React from 'react'

function HeroHeading({text, fontSize}) {
  return (
    <div className='hero-heading' style={{
        fontSize : `${fontSize}rem`      //getting the font size as a prop and implementing it 
      }}>{text}</div>
  )
}

export default HeroHeading