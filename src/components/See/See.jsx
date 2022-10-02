import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import './See.scss'

function See() {

let location = useLocation()

let [data, setData] = useState([])

const newItem = async () => {
try {
const response = await GET.questions();
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
<div className='see'>
    <div className="container">
        <div className="see__inner">
            <div className="see__img-box">

            </div>
            <div className="see__info">
                <h2 className='see__title'>See why we are trusted the world over</h2>
                <p className='see__text'>The first rule of any technology used in a business is that automation applied
                    to an efficient operation will magnify the efficiency.</p>
                <ul className='see__list'>
                    {data.map((item, i)=> {
                    return (

                    <li className='see__item' key={i} id={item.id}>
                        <div className='see__item-inner' id={item.id}>
                            <p className='see__item-text'>{item.question_uz}</p>
                            <p className='see__item-bottom'>{item.answer_uz}</p>
                        </div>

                        <button className='see__item-btn'>
                            <i className='bx bx-plus'></i>
                        </button>
                    </li>

                    )
                    })}
                </ul>
            </div>
        </div>
    </div>
</div>
)
}

export default See