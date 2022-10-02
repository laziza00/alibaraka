import React from 'react'
import person1 from '../../assets/images/person2.png'
import uchburchak from '../../assets/images/contactBurchak.png'
import aylana from '../../assets/images/contactAylana.png'
import './Contact.scss'

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact__inner">
                <div className="contact__box">
                    <img src={person1} alt="img" className='contact__img' />
                    <div className='contact__inner-box'>
                   
                        <form className="contact__form">
                        <h3 className='contact__title'>Still are you hesitating?</h3>
                        <p className='contact__text'>Your work is going to fill a large part of your life, and the only way to be truly satisfied.</p>
                            <div className='contact__form-box'>
                                <div className='contact__form-inner'>
                                    <input type="text" placeholder='Enter your name' className='contact__input-box' />
                                </div>
                                <div className='contact__form-inner'>
                                    <input type="number" placeholder='Enter phone tel' className='contact__input-box' />
                                </div>
                            </div>
                            <div className='contact__form-inner textre'>
                                <textarea className='contact__form-textre'   name="text" id="text" cols="47" rows="3">Enter your subject</textarea>
                            </div>
                            <button className='contact__btn'>SEND MESSAGE</button>
                        </form>
                        <img className='contact__uchburchak' src={uchburchak} alt="img" />
                        <img className='contact__aylana' src={aylana} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact