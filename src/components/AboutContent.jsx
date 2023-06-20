import React from 'react'
import Qoutation from './Qoutation'
import { data } from '../data'
import TextView from './TextView'
import MobileBackground from './MobileBackground'
import Button from './Button'
function AboutContent() {
    const about = data.about;
    return (
        about.map((d, index) => {
            return (
                <div className={index % 2 === 0 ? 'about-content' : 'about-content-rev'} key={d.heading}>
                    <MobileBackground />
                    <div className='about-text'>
                        <TextView text={d.heading} fontSize={4} />
                        <Qoutation quotation={d.text} />
                        <Button text={'Learn More'} />
                    </div>
                </div>
            )
        })
    )
}

export default AboutContent