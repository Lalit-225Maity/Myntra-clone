import React from 'react'
import { useLocation } from 'react-router-dom'
import './ProductItems.css'
import { useState } from 'react';
const ProductItem = () => {
    const { state } = useLocation();
    const { item } = state || {};
    const [shirt, setshirt] = useState(false);
    const Check = () => {
        if (shirt === false) {
            setshirt(true);
        }
        else {
            setshirt(false);
        }
    }
    return (
        <div className='items'>

            <div className="sidebar">
                <div className="filter">
                    <h3>Filters</h3>
                    <div className="catagories">
                        <h4>Catagories</h4>
                        <div className="tshirts" onClick={() => { Check(); }}>
                            <p>T-Shirts</p>
                            {shirt && (
                                <>
                                    <p>Kids' T-shirts</p>
                                    <p>Couple T-shirts</p>
                                    <p>Women's T-shirts</p>
                                    <p>Men's T-shirts</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-details">
                {item.map((i) => (
                    <div className='search-items'>
                        <div className="items-image">
                            <img src={i.image} alt="" />
                            <h3>{i.Brand}</h3>
                            <div className="items-Price">
                                <p>₹{i.Price}</p>
                                <p style={{ textDecoration: "line-through" }}>₹{i.Actualprice}</p>
                                <p>{i.Offer}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProductItem
