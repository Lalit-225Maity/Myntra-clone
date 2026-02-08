import React from 'react'
import './Men.css'
import menproduct from '../../API/MenOffer'
import { useState } from 'react'
import { useEffect } from 'react'
import Menproduct from '../../image/MenProduct'
import { useNavigate } from 'react-router-dom'
const Men = () => {
  const navigate=useNavigate();
  const [first, setfirst] = useState(0);
  useEffect(() => {
    const ImageChange = setInterval(() => {
      setfirst((i) => { return (i + 1) % Menproduct.length })
    }, 8000);
    return () => { clearInterval(ImageChange) }

  }, [])

  return (
    <div className='men'>
      <div className="men-items">
        <div className="menproduct-image">
          <img src={Menproduct[first].img} alt="" />
        </div>
        <h1>Battle to win the hearts</h1>
        <div className="badges">

          {menproduct.map((i) => (
            <div className='badge-product' onClick={()=>{navigate('/service',{state:{productname:i.name}})}}>
              <img src={i.img} alt="Error" />
              <h2>{i.name}</h2>
              <h2>{i.Offer}</h2>

            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Men
