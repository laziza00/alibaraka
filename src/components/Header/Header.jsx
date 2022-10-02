import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <div className='header'>
          <div className="container">
            <div className="header__inner">
                <div className="header__logo-box">
                 <a href='#' className=''>
                    <img src={logo} alt="img" className='header__logo' />
                 </a>
                </div>
                <div className='header__navbar'>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link to='/products' className='header__link'>
                              Products
                            </Link>
                        </li>
                        <li className='header__item'>
                            <a href='#' className='header__link'>
                               About us
                            </a>
                        </li>
                        <li className='header__item'>
                            <a href='#' className='header__link'>
                              Blog
                            </a>
                        </li>
                        <li className='header__item'>
                            <a href='#' className='header__link'>
                              Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='header__phone-box'>
                    <div className='header__btn-box'>
                        <div className='header__phone'>
                        <i className='bx bx-phone '></i>
                        </div>
                        <div>
                        <a className='header__phone-link' href='tel:95-004-80-90'>
                           95-004-80-90 </a>
                           <br/>
                           <a className='header__phone-link' href='tel:94-641-40-00'>
                           94-641-40-00</a>
                        </div>
                 
                    </div>
                </div>
            </div>
          </div>
       </div>
    </>

  )
}

export default Header