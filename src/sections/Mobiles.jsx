import React from 'react'
import Mobile from '../components/Mobile'
import Download from '../components/Download'
function Mobiles() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'

    }}>
      <div className='mobiles'>
        <Mobile height={512} width={250} />
        <Mobile height={580} width={290} />
        <Mobile height={512} width={250} />
      </div>
      <div style={{
        position: 'relative',
        top: '-300px'
      }}>
        <div style={{
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          transform : 'translate(0%, 100%)'
        }}>
          <Download />
        </div>
      </div>
    </div>

  )
}

export default Mobiles