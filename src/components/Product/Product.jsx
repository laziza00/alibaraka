import React, { useEffect, useState } from 'react'
import './Product.scss'
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import GET from '../Api/Get'
import { Link } from 'react-router-dom'


function Product() {

   
    let [data, setData] = useState([])
  
    const newItem = async () => {
      try {
        const response = await GET.category();
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
    <section className="product" id='product'>
        <div className="container">
            <div className="product__inner">
                <h2 className='product__title'>our production</h2>
                <p className='product__text'>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work</p>
                <ul className='product__list'>
                    {data.map((item, i)=> {
                        return   (
                          <Link to={`/product_item/${item.id}`} style={{textDecoration: 'none'}} className='product__item'  key={i}>
                     
                            <img src={item.image} className="product__item-img" alt="img" />
                             <div className='product__item-box'>
                                <h3 className='product__item-title'>{item.name_uz}</h3>
                                <p className='product__item-text'>{item.text_uz}</p>
                            </div>
                           </Link>
                      )
                    })}
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Product