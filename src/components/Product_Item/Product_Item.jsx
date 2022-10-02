import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HeroBG from '../Hero/HeroBG'
import Story from '../Story/Story'
import './Product_Item.scss'

function Product_Item() {

let location = useLocation()

let [data, setData] = useState([])

const newItem = async () => {
try {
const response = await GET.products();
setData(response.data)

} catch (err) {
console.log(err)
return
}
}

useEffect(() => {
newItem()
}, [])


return (
<>
  <Header />
  <div className="per">
    <div className="container">
      <div className="per__inner">
        <h2 className='per__title'>our production</h2>
        <div className='per__box'>
          <p className='per__text'>Mahsulotni tanlash</p>
          <div className='per__hr'></div>
          <ul className='per__list'>
            {data.map((item, i)=> {
            if(item.category == location.pathname.split('/').at(-1) ){
            return (
            <Link className='per__item' key={i} to={`/output/${item.id}`} style={{textDecoration: 'none'}}>
            <img src={item.image1} alt="img" className='per__img' />
            <h3 className='per__item-title'>{item.name_uz}</h3>
            <p className='per__price'>UZS {item.cost*50.25}</p>
            </Link>
            )
            }
            })}

          </ul>
          <div className='per__btn-box'>
            <Link className='per__btn'  to={`/main/`} style={{textDecoration: 'none'}}>BARCHASINI KO’RISH</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Story />
  <Contact />
  <Footer />
  <HeroBG />
</>
)
}

export default Product_Item