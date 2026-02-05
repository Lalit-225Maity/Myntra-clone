import React from 'react'
import './Men.css'
import API from '../../API/MynProduct'
import { useEffect } from 'react'
import { useState } from 'react'
const Men = () => {
  const [api, setapi] = useState([]);
  useEffect(() => {
    const productAPI = async () => {
      const response = await API.get('/api/v1/amazon/search', {
        params: {
          "query": "T-shirts",
          "light_request": "true",
          "country": "in",
          "domain": "in",
          "language": "en_IN",
          "currency": "INR",
          "start_page": "1",
          "sort_by": "price_high_to_low",
          "pages": "3"
        }
      })
      console.log(response.data.products);
      setapi(response.data.products)


    }
    productAPI();
  }, [])

  return (
    <div className='men'>
      <div className="men-sidebar">

      </div>
      <div className="men-items">
        <img src="/myntra-fashion-carnival-sale-2025.jpg" alt="" />
        <h1>Battle to win the hearts</h1>
        {api &&<div className="men-fashion-item">

          {api.map((i) => (
            <div className='men-products-cloth'>
              <img src={i.url_image} alt="" />
              <p>{i.title}</p>
              <p>₹{i.price}</p>
              <p>{i.shipping_information}</p>
              <p>{i.rating}</p>
            </div>
          ))}



        </div>}

      </div>


    </div>
  )
}

export default Men
