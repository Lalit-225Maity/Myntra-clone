import React, { useEffect, useState } from 'react'
import './Home.css'
import Images from '../../image/Images';
import product from '../../image/Products';
const Home = () => {
    const [index, setindex] = useState(0);
    const [startindex, setstartindex] = useState(0);
    useEffect(() => {
        const Interval = setInterval(() => {
            setindex((i) => (i + 1) % Images.length)
        }, 8000);
        return () => clearInterval(Interval);
    }, [])
    useEffect(() => {
        const Change = setInterval(() => {
            setstartindex((j) => {
                if (j + 5 >= product.length) {
                    return 0;
                }
                else {
                    return j + 5;
                }
            })
        }, 5000);
        return () => { clearInterval(Change) }
    }, [])


    return (
        <div className='home'>
            <div className="crousel">
                <div className="track">

                    <img src={Images[index].img} alt="" />
                </div>
                <div className="savings">
                    <img src="/—Pngtree—multiple hearts clipart_5569598.png" alt="" />
                    <h2>Swipe rights savings</h2>
                    <img src="/—Pngtree—multiple hearts clipart_5569598.png" alt="" />
                    
                </div>
            </div>
            <div className="h2">
                <h2>R I S I N G </h2>
                <h2>S T A R S</h2>
            </div>
            <div className="fixed-position">
                <h4>UPTO ₹400  OFF</h4>
            </div>
            <div className="badge">
                {product.slice(startindex, startindex + 5).map((i) => (
                    <div className='badge-details'>
                        <img src={i.img} alt="" />
                        <h3>{i.name}</h3>
                        <h3>{i.offer}</h3>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Home
