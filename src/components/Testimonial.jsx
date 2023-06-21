import React from 'react'

function Testimonial({ testimonial }) {
    return (
        <div className='testimonial'>
            <div className='testimonial-txt' style={{
                fontStyle: 'italic',
                fontSize : '1.5rem'
            }}>{testimonial.quote}</div>
            <div className='author'>
                <img src={testimonial.img} alt="" style={{
                    height: '80px',
                    borderRadius : '50%'
                }} />
                <span className='intro'>
                    <div style={{
                        fontWeight : '700'
                    }}>{testimonial.name}</div>
                    <div>{testimonial.position}</div>
                </span>
            </div>
        </div>
    )
}

export default Testimonial