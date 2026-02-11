import React, { useEffect, useState } from 'react'
import './Checkout.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { ContactInfo } = state || {};
  const [order, setorder] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const savedname = localStorage.getItem("name");
        if (!savedname) {
          navigate('/login')
        }
        const response = await axios.get(`/api/order?ContactInfo=${ContactInfo}`);
        console.log(response.data.userorder);
        setorder(response.data.userorder)
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [])
  const CancelOrder=async(items)=>{
    try {
     const cancel=await axios.delete(`/api/cancel?_id=${items._id}`);
     console.log(cancel.data);
      
     
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <div className='checkout'>
      {order.map((i) => (<div className="order-details">
        <div className="user-order">
          <p>Deliver to:</p>
          <h2>{i.UserName}</h2>
          <div className="user-address">
            <p>Deliver Address : {i.DeliverAddress}</p>
            <p>{i.PIN_NO}</p>
          </div>
          <p>{i.ContactInfo}</p>

        </div>
        <div className="order-product">
          <img src={i.ProductImage} alt="" />
          <div className="product-detail">
            <p>{i.Productname}</p>
            <p>₹{i.Price}</p>
            <p>Payment Mode : {i.COD}</p>
            <p>{i.status}</p>
          </div>
        </div>
 
  <button onClick={()=>{CancelOrder(i)}} >Cancel delivery</button>

      </div>
 
      ))}
    </div>
  )
}

export default Checkout
