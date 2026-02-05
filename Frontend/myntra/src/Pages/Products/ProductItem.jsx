import React from 'react'
import { useLocation } from 'react-router-dom'
import './ProductItems.css'
import checkbox from './Checkbox/Checkbox';
import { useState } from 'react';
const ProductItem = () => {
    const { state } = useLocation();
    const { item} = state || {};
    const [shirt, setshirt] = useState(false);
    const [brand, setbrand] = useState(false);
    const Check = () => {
        if (shirt === false) {
            setshirt(true);
        }
        else {
            setshirt(false);
        }
    }
    const Brands = () => {
        if (brand === false) {
            setbrand(true);
        }
        else {
            setbrand(false)
        }
    }
    return (
        <div className='items'>
            <div className="sidebar">
                <div className="filter">
                    <h3>Filters</h3>
                    <div className="catagories">
                        <h4>Catagories</h4>
                        <div className="tshirts" >
                            <div className="drop-down" onClick={() => { Check(); }}>
                                <img src="/arrow-down.png" alt="Error" style={{ transform: shirt ? "rotate(90deg)" : "none" }} />
                                <p>T-Shirts</p>
                            </div>
                            {shirt && (
                                <div className='drop-shirts'>
                                    <p>Kids' T-shirts</p>
                                    <p>Couple T-shirts</p>
                                    <p>Women's T-shirts</p>
                                    <p>Men's T-shirts</p>
                                </div>
                            )}
                        </div>
                        <div className="brand-name"  >
                            <div className="brand-dropdown" onClick={() => { Brands(); }}>
                                <img src="/arrow-down.png" alt="" style={{ transform: brand ? "rotate(90deg)" : "none" }} />
                                <p>Brands</p>
                            </div>
                            {brand && (
                                <div className='brand-select'>
                                    {checkbox.map((i) => (
                                        <div className='brand-label'>
                                            <input type="checkbox" name={i.name} id={i.id} />
                                            <label htmlFor={i.label}>{i.label}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className="items-details">
                {item.map((i) => (
                    <div className='search-items'>
                        <div className="items-image">
                            <img src={i.url_image} alt="" />
                            <p>{i.title}</p>
                            <p>Rating:{i.rating}</p>
                            <div className="items-Price">
                                <p>₹{i.price}</p>
                                <p style={{ textDecoration: "line-through" }}>₹{i.price_strikethrough}</p>
                            </div>
                            <div className="shiiping-info">
                                <p>{i.shipping_information}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProductItem
