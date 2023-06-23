import React from 'react'
import Mobile from './Mobile'

function MobileBackground() {
    return (
        <div className='mb-with-bg'>
            <div className='mb-bg' style={{
                height: '300px',
                width: '500px',
                borderRadius : '10px',
                backgroundColor: '#1E5AF9',
                position: 'absolute',
                transform : 'translate(0%, 25%)'
            }}></div>
            <Mobile height={580} width={290} />
            </div>
    )
}

export default MobileBackground