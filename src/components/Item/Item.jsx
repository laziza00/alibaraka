import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import './Item.scss'

function Item() {

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
    <div className="item">
        <div className="container">
            <div className="item__inner">
                <h3 className='item__title'>Yana mahsulotlar</h3>
                <ul className='item__list'>
                    {data.map((item, i)=> {
                        if(item.id ==location.pathname.split('/').at(-1)){
                            return (
                                <Link key={i} className='item__item' style={{textDecoration: 'none'}}>
                                <img src={item.image1} alt="img" className='item__img' />
                                <h3 className='item__item-title'>{item.name_uz}</h3>
                                <p className='item__price'>UZS {item.cost*40}</p>
                                </Link>
                            )
                        }
                    })}
             
                </ul>
            </div>
        </div>
    </div>
</>
)
}

export default Item