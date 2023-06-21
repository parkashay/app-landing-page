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
        <Mobile height={720} width={360} />
        <Mobile height={800} width={400} />
        <Mobile height={720} width={360} />
      </div>
      <div style={{
        position: 'relative',
        top: '-300px'
      }}>
        <div style={{
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center'
        }}>
          <Download />
        </div>
      </div>
    </div>

  )
}

export default Mobiles