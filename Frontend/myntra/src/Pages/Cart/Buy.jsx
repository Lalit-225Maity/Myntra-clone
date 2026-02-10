import React from 'react'
import './Buy.css'
import { useLocation } from 'react-router-dom'
const Buy = () => {
    const { state } = useLocation();
    const { items } = state || {};
    return (
        <div className='buy' style={{ marginTop: "80px" }}>
            <div className="image-section">
                <img src={items.url_image} alt="" />
                <div className="buy-cart">
                    <button>Buy now</button>
                    <button>Add to Bag</button>
                </div>
            </div>
            <div className="product-section">
                <div className="item-details">
                    <h3>{items.title}</h3>
                    <p>Rating:{items.rating}</p>
                    <div className="price-through">
                        <p>₹{items.price}</p>
                        <p style={{ textDecoration: "line-through" }}>{items.price_strikethrough}</p>
                    </div>
                </div>
                <div className="delivary-option">
                    <span>Available offers

                        Bank OfferFlat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500T&C

                        Bank Offer10% off upto ?1500 on Canara Bank CC and CC EMI transactions on MOV of ?4999T&C

                        Bank Offer8% Off Up to ?750 on HDFC Bank Credit Card EMI on 6 months tenure. Min. Txn Value: ?7500T&C</span>
                </div>

            </div>
        </div>
    )
}

export default Buy
