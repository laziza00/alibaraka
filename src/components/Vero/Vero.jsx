import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import GET from '../Api/Get';
import './Vero.scss'

function Vero() {

let [data, setData] = useState([])

const newItem = async () => {
try {
const response = await GET.blogs();
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
    <div className="vero">
        <div className="container">
            <div className="vero__inner">
                <div className="vero__hr"></div>
                <ul className='vero__list'>
                    {data.map((item, i)=> {
                        return (
                        <li className='vero__item' key={i}>
                            <img src={item.image} alt="img" className='vero__img' />
                            <h3 className='vero__title'>{item.name_uz}</h3>
                            <p className='vero__text'>{item.description_uz.substring(0, 27)}...</p>
                            <p className='vero__dte'>{item.date}</p>
                        </li>
                            )
                    })}
                </ul>
                <Link className='vero__btn' to ={`/store/`} style={{textDecoration: 'none'}}>more blogs</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vero