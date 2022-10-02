import React from 'react'
import './Hero.scss';
import Frame from '../../assets/images/Frame.png';

function HeroBG() {
  return (
   <>
    <div className='hero__bg'>
        <img src={Frame} alt="img" className='hero__img' />
        <img src={Frame} alt="img" className='hero__img' />
        <img src={Frame} alt="img" className='hero__img' />
    </div>
   </>
  )
}

export default HeroBG