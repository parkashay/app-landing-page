import React from 'react'
import TextView from '../components/TextView'
import { data } from '../data'
import Qoutation from '../components/Qoutation'
function Subscribe() {
    const d = data.subscribe
  return (
    <div className='subscribe-section'>
        <div className="subscribe-txt">
            <TextView text={d.title} fontSize={3} />
            <Qoutation quotation={d.text} />
        </div>
        <button style={{
            border : '1px solid white',
            paddingTop : '15px',
            paddingBottom : '15px',
            paddingInline : '35px',
            borderRadius : '5px',
            backgroundColor : 'transparent',
            color : 'white',
            cursor : 'pointer',
            fontWeight : '600'
        }}>
            Get Started
        </button>
    </div>
  )
}

export default Subscribe