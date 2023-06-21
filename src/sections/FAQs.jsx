import React from 'react'
import TextView from '../components/TextView'
import Accordion from '../components/Accordion'
import { data } from '../data'

function FAQs() {
    const faqs = data.FAQs
    return (
        <div className='FAQ-section'>
            <TextView text={'FAQ\'s'} fontSize={7} />
            <div className="FAQs">
                {faqs.map(faq => {
                    return <Accordion title={faq.question} content={faq.answer} key={faq.question}/>
                })}
            </div>
        </div>
    )
}

export default FAQs