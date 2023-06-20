import React from 'react'
import Mobile from './Mobile'

function MobileBackground() {
    return (
        <div className='mb-with-bg'>
            <div style={{
                height: '400px',
                width: '630px',
                borderRadius : '10px',
                backgroundColor: '#1E5AF9',
                position: 'absolute',
                transform : 'translate(0%, 20%)'
            }}></div>
            <Mobile height={720} width={360} />
            </div>
    )
}

export default MobileBackground