import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import GET from '../Api/Get'
import './Output_Bg.scss'

function Output_Bg() {

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
  <div className='box'>
    <div className="container">
      <div className='box__inner'>
        <div>
          {data.map((item, i)=> {
            if(item.id ==location.pathname.split('/').at(-1)){
              return (
                <h2 className='box__title' key={i}>{item.name_uz}</h2>
              )
            }
          })}
              <div className="box__btns">
                <button className='box__btn'>
                  <i className='bx bx-chevron-down'></i>
                </button>
              </div>
        </div>
      </div>
    </div>
  </div>
</>

)
}

export default Output_Bg