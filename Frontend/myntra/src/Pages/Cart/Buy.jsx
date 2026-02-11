import React, { useEffect } from 'react'
import './Buy.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Buy = () => {
    const [COD, setCOD] = useState("");
    const navigate = useNavigate();
    const { state } = useLocation();
    const { items } = state || {};
    const [userd, setuserd] = useState();
    const [per, setper] = useState();
    const [user, setuser] = useState(false);
    const [customer, setcustomer] = useState();
    useEffect(() => {
        const NAME = localStorage.getItem("name");
        const localdata = JSON.parse(NAME);
        setcustomer(localdata);
        if (localdata && localdata !== "undefined") {
            setuser(true)
        }
        else {
            setuser(false);
        }
    }, [])

    useEffect(() => {
        if (items.price && items.price_strikethrough) {
            const discount = (items.price_strikethrough) - (items.price);
            const percentage = (discount / items.price_strikethrough) * 100;
            setper(Math.ceil(percentage));
        }
    }, [items]);
    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();

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
    const Putdata = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                localStorage.setItem("DATA", JSON.stringify(data));
                resolve("success");
            }, 1000);
        })
    }
    const Buyproduct = async () => {
        if (user === true && COD) {
            try {
                const mydata = {
                    UserName: customer.Username,
                    ContactInfo: customer.PhoneNumber,
                    status: items.shipping_information,
                    Productname: items.title,
                    Price: items.price,
                    ProductImage: items.url_image,
                    DeliverAddress: userd.Address,
                    PIN_NO: userd.pin,
                    COD:COD
                }
                const response = await axios.post('/api/order', mydata);
                console.log(response.data);
                navigate('/checkout', { state: { ContactInfo: customer.PhoneNumber } })

            } catch (error) {

            }
        }
        else {
            if (user === false) {
                navigate('/login')
            }
            else {
                alert("Select Mode of Delivery")
            }
        }
    }


    useEffect(() => {
        console.log(COD);

    }, [COD])

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
                        <p style={{ textDecoration: "line-through" }}>₹{items.price_strikethrough}</p>
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
                            <input type="submit" value={isSubmitting ? "save..." : "save"} />
                        </form>}
                        <div className="delivery-time">
                            <p>{items.shipping_information}</p>
                        </div>
                        <div className="payment-meythods">
                            <h4>Payment Method</h4>
                            <span>
                                <input type="radio" name="payment" id="method-1" value="Cash on Delivery" onChange={(e) => { setCOD(e.target.value) }} />
                                <label htmlFor="method-1" >Cash on Delivery</label></span>

                        </div>


                    </div>
                </div>
                <div className="company-assurance">
                    <span>
                        <img src="/assurance (1).png" alt="Error" />
                        <p>Myntra assurance</p>
                    </span>
                    <span>
                        <img src="/discount.png" alt="" />
                        <p>Discount available</p>
                    </span>
                    <span>
                        <img src="/return.png" alt="" />
                        <p>Easy returns and exchanges</p>
                    </span>
                </div>
                <div className="buy-cart">
                    <button onClick={() => { Buyproduct(); }}>Buy at ₹{items.price}</button>
                    <button onClick={() => { }}>Add to Bag</button>
                </div>
            </div>

        </div>
    )
}

export default Buy
