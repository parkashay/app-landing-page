import React, { useState } from 'react'
function Accordion({ title, content }) {
    const [open, setOpen] = useState(false);
    const accordionToggle = () => {
        setOpen(!open)
    }
    return (
        <div className='accordion' style={open ? {
            backgroundColor: 'white',
            marginTop: '20px',
            marginInline: '3vw',
            borderRadius: '5px',
            boxShadow: '1px 1px 2px gray',
            color: 'red',
            paddingRight: '10px'
        } : {
            backgroundColor: '#FAFAFA',
            marginTop: '20px',
            marginInline: '3vw',
            borderRadius: '5px',
            boxShadow: '1px 1px 2px gray',
            paddingRight: '10px'
        }}>
            <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
            }}>

                {/* Toggle Button */}
                <div className='open-close'
                    onClick={accordionToggle}
                >
                    {open ? '-' : '+'}
                </div>

                {/* Question */}
                <div style={{
                    fontSize: '1.5rem',
                    color : 'black'
                }}>{title}</div>
            </div>

            {/* Answer */}
            <div style={open ? {
                fontSize: '1.5rem',
                textAlign: 'left',
                color: 'gray',
                marginLeft: '6rem',
                transition: 'max-height 0.5s ease-in',
                maxHeight: '500px',
                overflow: 'hidden',
                paddingTop : '20px',
                paddingBottom: '20px'
            } : {
                maxHeight: '0px',
                overflow: 'hidden',
                transition : 'max-height,padding 0.5s ease-out',
                fontSize: '1.5rem',
                textAlign: 'left',
                color: 'gray',
                marginLeft: '6rem',
                
            }}>
                {content}
            </div>
        </div>
    )
}

export default Accordion