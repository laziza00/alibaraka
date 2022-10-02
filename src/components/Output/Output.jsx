import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import Commodity from '../Commodity/Commodity'
import Contact from '../Contact/Contact'
import Desc from '../Desc/Desc'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HeroBG from '../Hero/HeroBG'
import Item from '../Item/Item'
import Output_Bg from '../Output_Bg/Output_Bg'

function Output() {

  return (
    <>
    <Header/>
    <Output_Bg/>
    <HeroBG/>
    <Commodity/>
    <Desc/>
    <Item/>
    <Contact/>
    <Footer/>
    <HeroBG/>
    </>
  )
}

export default Output