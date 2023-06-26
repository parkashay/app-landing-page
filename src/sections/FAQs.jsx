import React from 'react'
import TextView from '../components/TextView'
import Accordion from '../components/Accordion'
import { data } from '../data'

function FAQs() {
    const faqs = data.FAQs
    return (
        <div className='FAQ-section'>

            {/* Heading */}
            <TextView text={'FAQ\'s'} fontSize={5} />

            {/* Frequently asked Questions */}
            <div className="FAQs">
                {faqs.map(faq => {
                    // While calling the accordion component, the title prop determines the question and the content prop determines the answer.
                    return <Accordion title={faq.question} content={faq.answer} key={faq.question} />
                })}
            </div>
        </div>
    )
}

export default FAQs