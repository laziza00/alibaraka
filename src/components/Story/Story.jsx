import React, { useEffect, useState } from 'react'
import './Story.scss'
import person from '../../assets/images/person.png'
import { Link, useLocation } from 'react-router-dom'
import GET from '../Api/Get'

function Story() {

let location = useLocation()
let text =[]
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
<div className='story'>
    <div className="container">
        <h2 className='story__title'>How our client made 10x revenue</h2>
        <div className="story__inner">
            <div className="story__img-box">
                <img className='story__img' src={person} alt="img" />
                <Link className='story__btn' to={`/store/`} style={{textDecoration:'none'}}> more stories</Link>
                <div className='story__box'>
                    <h3 className='story__inner-title'>"I learned so much, even as a professional".</h3>
                    <p className='story__text'>"Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer
                        eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
                    </p>
                    <p className='story__name'>Juan Huang</p>
                </div>
            </div>

            <div className="story__info">
                <h3 className='story__info-title'>Other successful stories</h3>
                <ul className='story__list'>
                    {data.map((item, i)=> {
                    return (
                    <li className='story__item' key={i}>
                        <h3 className='story__item-title'>{item.name_uz}</h3>
                        <p className='story__item-text'>{item.description_uz.substring(0, 50)}...</p>
                        <Link className='story__item-link' to={`/blogs/${item.id}`}>More Information</Link> 
                    </li> 
                        ) })} 
                        
                   </ul>
               </div> 
            </div> 
        </div> 
    </div> 
)
} 
                        
export default Story