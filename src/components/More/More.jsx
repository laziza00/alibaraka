import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import './More.scss'

function More() {

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
console.log(data);

return (
<>
    <div className="more">
        <div className="container">
            <div className="more__inner">
                <h2 className='more__title'>Ko'proq bloglar</h2>
                <ul className='more__list'>
                    {data.map((item, i)=> {
                    return (
                    <Link className='more__item' to={`/blogs/${item.id}`} style={{textDecoration: 'none'}} key={i}>
                    <div className='more__item-inner'>
                        <img src={item.image} alt="img" className='more__img' />
                        <h3 className='more__item-title'>{item.name_uz}</h3>
                        <p className='more__text'>{item.description_uz.substring(0, 150)}...</p>
                    </div>
                    </Link>
                    )
                    })}

                </ul>
            </div>
        </div>
    </div>
</>
)
}

export default More