import React from 'react'

function Button({text}) {
  return (
        <button style={{
            paddingTop : '20px',
            paddingBottom : '20px',
            paddingInline : '40px',
            fontSize : '1.5rem',
            backgroundColor : 'black',
            borderRadius : '10px',
            color : 'white',
            marginTop: '40px',
            cursor : 'pointer'
        }}
        >{text}</button>
  )
}

export default Button