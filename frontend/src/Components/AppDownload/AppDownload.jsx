import React from 'react'
import './AppDownload.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/>SpiceRoute</p>
        <div className='app-download-platforms'>
            <img src={frontend_assets.play_store} alt="" />
            <img src={frontend_assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
