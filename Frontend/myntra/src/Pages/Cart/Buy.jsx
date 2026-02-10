import React, { useEffect } from 'react'
import './Buy.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
const Buy = () => {
    const { state } = useLocation();
    const { items } = state || {};
    const [userd, setuserd] = useState();
    const [per, setper] = useState();
    useEffect(() => {
        const discount = (items.price_strikethrough) - (items.price);
        const percentage = (discount / items.price_strikethrough) * 100;
        setper(Math.ceil(percentage))
    }, [items]);
    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState:{isSubmitting}
    } = useForm()
    useEffect(() => {
        try {
            const checkdata = localStorage.getItem("DATA");
            if (checkdata && checkdata !== "undefined") {
                const uservalues = JSON.parse(checkdata);
                console.log(uservalues);

                setuserd(uservalues);
            }
            else {
                setuserd("");
            }
        } catch (error) {
            console.log(error);

        }
    }, [])
    const Putdata = async(data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                 localStorage.setItem("DATA", JSON.stringify(data));
                 resolve("success");
            }, 1000);
        })
    }
    return (
        <div className='buy' >
            <div className="image-section">
                <img src={items.url_image} alt="" />
            </div>
            <div className="product-section">

                <div className="item-details">
                    <h3>{items.title}</h3>
                    <p className='rate'>Rating: <img src="/star.png" alt="" />{items.rating}</p>
                    <div className="price-through">
                        <p>₹{items.price}</p>
                        <p style={{ textDecoration: "line-through" }}>{items.price_strikethrough}</p>
                        <p>%{per} off</p>
                    </div>
                </div>
                <div className="delivary-option">
                    <div className="delivery-detail">
                        <h3>Delivery Details</h3>
                        {userd ? <form>
                            <input type="text" value={userd.Address} readOnly />
                            <input type="text" value={userd.pin} readOnly />
                        </form> : <form onSubmit={handleSubmit(Putdata)}>
                            <input type="text" {...register("Address")} />
                            <input type="text" {...register("pin")} />
                            <input type="submit" value={isSubmitting?"save...":"save"} />
                        </form>}
                    </div>

                </div>

                <div className="buy-cart">
                    <button>Buy now</button>
                    <button>Add to Bag</button>
                </div>
            </div>

        </div>
    )
}

export default Buy
