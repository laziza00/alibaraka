import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GET from '../Api/Get';
import './Commodity.scss';

function Commodity() {

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
    <div className="output">
        <div className="container">
            {data.map((item, i)=> {
            if(item.id == location.pathname.split('/').at(-1)){
            return (
            <div className="output__inner" key={i}>
                <div className="output__info">
                    <h3 className='output__title'>{item.name_uz}</h3>
                    <p className='output__text'>{item.sub_description_uz}
                    </p>
                    <p className='output__price'>{item.cost * 40} UZS</p>
                    <div className='output__inner-box'>
                        <div className='output__box'>
                            <i className='bx bxs-truck icon'></i>
                            <div>
                                <p className='output__yet'>Bepul yetkazib berish </p>
                                <p className='output__plink'> Yetkazib berish xizmati bepul</p>
                            </div>
                        </div>
                        <div className='output__box'>
                            <i className='bx bx-check-shield icon'></i>
                            <div>
                                <p className='output__yet'>Qaytib olish shartlari</p>
                                <a className='output__plink link' href='#'> Learn More </a>
                            </div>

                        </div>
                    </div>
                    <div className='output__btns'>
                        <button className='output__btn green'>XARID QILISH</button>
                        <button className='output__btn white'>BOG’LANISH</button>
                    </div>
                </div>
                <div className="output__img-box">
                    <div className="output__img-box__inner">
                        <img src={item.image1} alt="img" className='output__img' />
                    </div>
                    <div className='output__imgs'>
                        <img src={item.image1} alt="img" className='output__img-iner' />
                        <img src={item.image2} alt="img" className='output__img-iner' />
                        <img src={item.image3} alt="img" className='output__img-iner' />
                    </div>

                </div>
            </div>
            )}})}

        </div>
    </div>
</>
)
}

export default Commodity