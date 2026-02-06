import React from 'react'
import { useLocation } from 'react-router-dom'
import './ProductItems.css'
import checkbox from './Checkbox/Checkbox';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ProductItem = () => {
    const { state } = useLocation();
    const { cloth } = state || {};
    const [shirt, setshirt] = useState(false);
    const [brand, setbrand] = useState(false);
    const [item, setitem] = useState([])
    const [loading, setloading] = useState(true)

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
    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const response = await axios.get(`/api/search?q=${cloth}`);
                console.log(response.data.user);

                setitem(response.data.user);
            } catch (error) {

            }
            finally {
                setloading(false);
            }
        }
        FetchProduct();
    }, [cloth])



    return (

        <div className='items'>
            {loading && <h2 className='load'>Loading........</h2>}
            {!loading && (<div className="sidebar">
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
            </div>)}
            {!loading && (<div className="items-details">
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
                            <div className="cart-buy">
                                <button className='cart1'>Buy now</button>
                                <button className='cart2'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>)}
        </div>

    )
}

export default ProductItem
