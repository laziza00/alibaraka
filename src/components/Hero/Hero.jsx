import React from 'react';
import Header from '../Header/Header';
import './Hero.scss';
import Frame from '../../assets/images/Frame.png'
import vector2 from '../../assets/images/vector2.png'
import vector1 from '../../assets/images/vector1.png'
import play from '../../assets/images/play.png'

function Hero() {
  return (
    <>
    <div className='hero'>
        <Header></Header>
        <div className="hero__big">
        <div className="container">
            <div className="hero__inner">
                <div className="hero__info">
                    <h1 className='hero__title'>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
                    <p className='hero__text'>Here will be brief information about our company and some of advantages of our offers. Here will be brief information about our company.</p>
                    <button className='hero__btn'>
                        EXPLORE<i className='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
                <div className="hero__img-box">
                    <img className='hero__img' src={play} alt="img" />
                </div>
            </div>
        </div>
        </div>
    </div>
    </>

  )
}

export default Hero