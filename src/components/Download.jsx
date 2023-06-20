import React from 'react'
import googleplay from '../img/googleplay.png'
import appstore from '../img/appstore.png'
import { data } from '../data'
function Download() {
    return (
        <div className='download'>
            <div className='appstore' onClick={() => {
                window.open(data.appstore, '_blank')
            }}>
                <img src={appstore} alt="" style={{
                    width: '100%',
                }} />
            </div>
            <div className='googleplay' onClick={() => {
                window.open(data.googleplay, '_blank')
            }}>
                <img src={googleplay} alt="" style={{
                    width: '100%',
                }} />
            </div>
        </div>
    )
}

export default Download