import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GET from '../Api/Get';
import './Desc.scss'

function Desc() {

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
    <div className='desc'>
        <div className="container">
            <div className="desc__inner">
                <div className="desc__info">
                    <h3 className='desc__title blck'>Description</h3>
                    <h3 className='desc__title white'>Information</h3>
                </div>
                <div className="desc__more">
                    {data.map((item, i)=> {
                        if(item.id ==location.pathname.split('/').at(-1)){
                            return (
                                <p className='desc__text' key={i}>
                                    {item.description_uz}
                                    {/* Пшеничная мука с отрубями имеет сбалансированный состав. Благодаря
                                сбалансированной структуре значительно улучшается вкус и польза хлеба и других изделий. В
                                отрубях содержится свыше 80% всех биологически ценных веществ пшеницы: минералов, витаминов,
                                микроэлементов. Отруби отличаются высоким содержанием белка и укрепляют иммунную систему
                                организма.
                                <br />
                                <br />
                                Пшеничная мука с отрубями - продукт, рекомендованный людям, ведущим здоровый образ жизни, и тем,
                                кто любит ароматную и полезную выпечку.
                                <br />
                                <br />
                                Вес упаковки: 50кг
                                <br />
                                <br />
                                Состав: мука пшеничная хлебопекарная высший сорт по ГОСТ Р 52189-2003, отруби пшеничные.
                                <br />
                                <br />
                                Пищевая ценность в 100 г продукта: белки - 10,0 г, жиры - 1,0 г, углеводы - 68,0 г.
                                <br />
                                <br />
                                Энергетическая ценность: 1340 кДж, калорийность: 320 ккал.
                                <br />
                                <br />
                                Срок хранения: 12 месяцев. Хранить при температуре +20±5С и относительной влажности воздуха не
                                более 70%, в сухих, чистых, хорошо вентилируемых помещениях, не зараженных вредителями хлебных
                                запасов.
                                <br />
                                <br />
                                Теги: Мука пшеничная с отрубями т.м. С.Пудов, Россия, фасовка 50 кг */}
                                </p>
                            )
                        }
                    })}

                </div>
            </div>
        </div>
    </div>
</>

)
}

export default Desc