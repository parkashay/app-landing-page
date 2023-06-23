import React from 'react'
import TextView from '../components/TextView'
import Testimonial from '../components/Testimonial'
import { data } from '../data'
function Testimonials() {
    const testimonials = data.testimonials
  return (
    <div className='testimonials-section'>
        <TextView text={'Testimonials'} fontSize={5} />
        <div className='testimonials'>
            {testimonials.map(testimonial => {
                return <Testimonial testimonial = {testimonial} key={testimonial.name}/>
            })}
        </div>
    </div>
  )
}

export default Testimonials