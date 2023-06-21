import React from 'react'
import TextView from '../components/TextView'
import Qoutation from '../components/Qoutation'
import { data } from '../data'
import Mobile from '../components/Mobile'
import Download from '../components/Download'
function DownloadLink() {
    const txt = data.downloadLink
  return (
    <div className='download-link'>
        <div className='download-link-left-part'>
            <TextView text={txt.title} fontSize={7}/>
            <Qoutation quotation={txt.text} />
            <Download />
        </div>
        <div className='download-link-right-part'>
            <Mobile height={800} width={400} />
        </div>
    </div>
  )
}

export default DownloadLink