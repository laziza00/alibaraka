import React from 'react'
import img from '../../assets/images/li-bg.png'
import './Little.scss'
import google from '../../assets/images/logos_google.png'
import slck from '../../assets/images/logos_slack.png'
import wordpress from '../../assets/images/logos_wordpress.png'

function BigLittle() {
  return (
    <>
    <div className='little__ms' >
        <div className='little__bottom'>
        <img src={img} alt="img" className='little__bg' />
        <img src={img} alt="img" className='little__bg' />
        <img src={img} alt="img" className='little__bg' />
        </div>
        <div className='little__bottom-box'>
            <img src={google} alt="img" className='little__bg-logos' />
            <img src={slck} alt="img" className='little__bg-logos' />
            <img src={wordpress} alt="img" className='little__bg-logos' />
            <img src={google} alt="img" className='little__bg-logos' />
        </div>
    </div>
    </>

  )
}

export default BigLittle