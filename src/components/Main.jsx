import React from 'react'
import Hero from './Hero/Hero'
import HeroBG from './Hero/HeroBG'
import Product from './Product/Product'
import './Main.scss'
import Little from './Little/Little'
import BigLittle from './Little/BigLittle'
import See from './See/See'
import Story from './Story/Story'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { Routes, Route } from 'react-router-dom'
// import Product_Item from './Product_Item/Product_Item'

function Main() {
  return (
    <>
       <Hero/>
       <HeroBG/>
       <div className='main'>
          <Product/>
          <Little />
          <BigLittle/>
       </div>
       <See/>
       <Story/>
       <Contact/>
       <Footer/>
       <HeroBG/>
    </>
  )
}

export default Main







        {/* <Route path='product__item/:id' element={<Product_Item/>}/> */}