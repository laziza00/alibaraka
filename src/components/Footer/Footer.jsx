import React from 'react'
import logo from '../../assets/images/logo.svg'
import abba1 from '../../assets/images/abba1.svg'
import abba2 from '../../assets/images/abba2.svg'
import './footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="footer__top">
          <div className='footer__logoBox'>
            <a href="/">
              <img className='footer__logo' src={logo} alt="logo" />
            </a>
            <div className='footer__logoLinks'>
              <p>Tashkent, Mustakillik St, 15</p>
              <a href="tel:990000000">Tel: +998 99 000 00 00</a>
              <a href="email">E-mail: hello@alibaraka.com</a>
            </div>
          </div>
          <div className='footer__about'>
            <h4 className='footer__about-title'>About us</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href="/">About us</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Our team</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Frequent Questions</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Contact us</a>
              </li>
            </ul>
          </div>
          <div className='footer__about'>
            <h4 className='footer__about-title'>Products</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href="/">Plyonka</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Zajim</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Isitish x Sovutish</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Suv taqsimoti</a>
              </li>
            </ul>
          </div>
          <div className='footer__about'>
            <h4 className='footer__about-title'>Blog</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href="/">10X</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Gardening</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Melon</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="/">Water dist</a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{opacity: 0.3}} />
        <div className="footer__bottom">
          <div className='footer__bottom-textBox'>
            <p className='footer__bottom-text'>Все права защищены.</p>
          </div>
          <div className='footer__bottom-imgBox'>
            <p className='footer__bottom-text'>Разработано в</p>
            <img className='footer__bottom-img' src={abba1} alt="img" />
            <img className='footer__bottom-img' src={abba2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer