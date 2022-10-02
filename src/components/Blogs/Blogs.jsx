import React from 'react'
import Contact from '../Contact/Contact'
import Develop from '../Develop/Develop'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HeroBG from '../Hero/HeroBG'
import Bg_Wht from '../Output_Bg/Bg_Wht'
import Vero from '../Vero/Vero'

function Blogs() {
  return (
    <>
     <Header/>
     <Bg_Wht/>
     <HeroBG/>
     <Develop/>
     <Vero/>
 
     <Contact/>
     <Footer/>
     <HeroBG/>
    </>
  )
}

export default Blogs