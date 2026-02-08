import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './Shop.css'
const Shop = () => {
    const { state } = useLocation();
    const { productname } = state || {};
    const [wait, setwait] = useState(true);
    const [products, setproducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/search?q=${productname}`);
                console.log(response.data.user);
                setproducts(response.data.user)

            } catch (error) {
                console.log(error.message);

            }
            finally {
                setwait(false)
            }
        })();
    }, [productname])

    return (
        <div className='service' style={{ marginTop: "80px" }}>
            {wait && <h4>Please wait..........</h4>}
            {!wait && <div className="men-shop-product">
                {products.map((i) => (
                    <div className="men-card-products">
                        <div className="men-product-details">
                            <img src={i.url_image} alt="Error" />
                            <p>{i.title}</p>
                            <p>Rating:{i.rating}</p>
                        </div>
                        <div className="men-items-Price">
                            <p>₹{i.price}</p>
                            <p style={{ textDecoration: "line-through" }}>₹{i.price_strikethrough}</p>
                        </div>
                        <div className="product-buy">
                            <button>Buy now</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Shop
