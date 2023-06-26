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

        {/* Heading and a small description */}
        <TextView text={txt.title} fontSize={5} />
        <Qoutation quotation={txt.text} />

        {/* Google Play and App store Badges */}
        <Download />
      </div>
      <div className='download-link-right-part'>
        <Mobile height={580} width={290} />
      </div>
    </div>
  )
}

export default DownloadLink