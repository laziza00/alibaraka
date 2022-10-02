import './App.css'
import Layout from './components/Layout/Layout'
import Hero from './components/Hero/Hero'
import HeroBG from './components/Hero/HeroBG'
import Product from './components/Product/Product'
import Little from './components/Little/Little'
import BigLittle from './components/Little/BigLittle'
import See from './components/See/See'
import Story from './components/Story/Story'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Product_Item from './components/Product_Item/Product_Item'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'
import Output from './components/Output/Output'
import Store from './components/Store/Store'
import More from './components/More/More'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <div className="app">
      <Layout>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='product_item/:id' element={<Product_Item/>}/>
        <Route path='output/:id' element={<Output/>}/>
        <Route path='store' element={<Store/>}/>
        <Route path='more/:id' element={<More/>}/>
        <Route path='blogs/:id' element={<Blogs/>}/>
       </Routes>  
      </Layout>
    </div>
  )
}

export default App

  
   