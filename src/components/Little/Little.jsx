import React from 'react'
import './Little.scss';
import car from '../../assets/images/car.png'
import { Link } from 'react-router-dom';

function Little() {
  return (
    <>
      <div className='little'>
         <div className="container">
            <div className="little__inner">
                <div className="little__info">
                    <h2 className='little__title'>little ABout our company </h2>
                    <p className='little__text'>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."</p>
                    <div className="little__btn-box">
                        <Link className='little__btn' to={`/store/`} style={{textDecoration:'none'}}>MORE ABOUT</Link>
                        <button className='little__btn our'>OUR YOUTUBE</button>
                    </div>
                </div>
                <div className="little__img-box">
                    <img className='little__img' src={car} alt="img" />
                </div>
            </div>
         </div>
      </div>
    </>
  
  )
}

export default Little