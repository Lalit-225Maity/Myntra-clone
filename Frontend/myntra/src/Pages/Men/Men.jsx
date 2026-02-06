import React from 'react'
import './Men.css'
import menproduct from '../../API/MenOffer'
import { useState } from 'react'
const Men = () => {


  return (
    <div className='men'>
      <div className="men-sidebar">

      </div>
      <div className="men-items">
        <img src="/myntra-fashion-carnival-sale-2025.jpg" alt="" />
        <h1>Battle to win the hearts</h1>
        <div className="badges">

          {menproduct.map((i) => (
            <div className='badge-product'>
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
