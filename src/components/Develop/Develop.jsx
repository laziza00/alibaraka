import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import './Develop.scss'

function Develop() {
 
    let loction = useLocation()
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
     <div className="develop">
        <div className="container">
            {data.map((item, i)=> {
                if(item.id == loction.pathname.split('/').at(-1)){
                    return (
                        <div className="develop__inner" key={i}>
                        <h2 className='develop__title'>{item.name_uz}</h2>
                        <div className='develop__box'>
                            <p className='develop__nme'>{item.author_uz}</p>
                            <p className='develop__dte'>{item.date}</p>
                        </div>
                        <img src={item.image} alt="img" className='develop__img' />
                        <p className='develop__text'>{item.description_uz}</p>
                    </div>
                    )
                }
            })}

        </div>
     </div>
    </>
  )
}

export default Develop