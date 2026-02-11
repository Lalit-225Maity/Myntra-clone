import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mandrop from './Dropdown/Mandrop'
import { useEffect } from 'react'
const Navbar = () => {
  const [dropstate, setdropstate] = useState(false);
  const [name, setname] = useState({});
  const Logout = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log(response.data);
      localStorage.removeItem("name");
      localStorage.removeItem("DATA")
      navigate('/login');
      window.location.reload();


    } catch (error) {

    }
  }
  useEffect(() => {
    (async () => {
      try {
        const savedname = localStorage.getItem("name");
        if (savedname || savedname !== "undefined") {
          setname(JSON.parse(savedname));
        }
      } catch (error) {
        console.log(error.message);

      }
    })();
  }, [])

  const [cloth, setcloth] = useState('');


  const Fetch = (e) => {
    if (e.key === 'Enter') {
      navigate('/items', { state: { cloth: cloth } })

    }
  }
  const Change = () => {

    if (dropstate === false) {
      setdropstate(true)
    }

  }
  const ChangeStop = () => {
    if (dropstate === true) {
      setdropstate(false);
    }
  }
  const navigate = useNavigate();
  const [menhover, setmenhover] = useState(false);
  return (
    <div className='navbar'>

      <NavLink to='/'> <img src="/myntra-2.svg" alt="" className='myntra-img' /></NavLink>
      <div className="nav-pages">
        <NavLink to='/' className={(e) => { return e.isActive ? "red" : "green" }} >Home</NavLink>
        <div className="men-wrapper" onMouseEnter={(e) => {
          setmenhover(true);
        }} onMouseLeave={() => { setmenhover(false) }}>
          <NavLink to='/men' className={(e) => { return e.isActive ? "red" : "green" }} >Men</NavLink>
          {menhover && (
            <div className='men-cloths'>
              <Mandrop />
            </div>
          )}
        </div>
        <div className="women-wrapper">
          <NavLink to='/women' className={(e) => { return e.isActive ? "red" : "green" }} >Women</NavLink>
        </div>
        <div className="kids-wrapper">
          <NavLink to='/kids' className={(e) => { return e.isActive ? "red" : "green" }}>Kids</NavLink>
        </div>
      </div>
      <div className="search-bar">
        <img src="/search-interface-symbol (1).png" alt="Error" />
        <input type="text" placeholder='search for products' value={cloth} onKeyDown={(e) => { Fetch(e) }} onChange={(e) => { setcloth(e.target.value) }} />
      </div>
      <div className="profile" onClick={(e) => { e.preventDefault(); }} onMouseEnter={(e) => { e.stopPropagation(); Change() }} onMouseLeave={() => { ChangeStop() }}>
        <NavLink onClick={() => { e.preventDefault(); }} ><img src="/profile.png" alt="" /></NavLink>
        <NavLink onClick={() => { e.preventDefault(); }}>Profile</NavLink>
        {dropstate && (
          <div className='dropdown'>
            {name ? <div className='user-details' onClick={() => { navigate('/profile'); setdropstate(false) }}>
              <p >User Profile</p>
            </div> : <div className='user-details' onClick={() => { navigate('/login'); setdropstate(false) }}>
              <p >signin/signup</p>
            </div>}
            <div className='user-order'>
              <p onClick={() => {
                if (name) {
                  navigate('/checkout', { state: { ContactInfo: name.PhoneNumber } })
                }
              }}> Orders</p>
              <p>Wishlist</p>
              <p>Gift Cards</p>
              <p>Contact Us</p>
              <p>Myntra Insider</p>
            </div>

            <div className='user-coupons'>
              <p> Coupons</p>
              <p>Saved Cards</p>
              <p> Saved VPA</p>
              <p>Saved Addresses</p>
            </div>
            {name && <div className="logout">
              <button onClick={() => { Logout() }}>Logout</button>
            </div>}
          </div>
        )}
      </div>
      <div className="wishlist" onClick={() => { navigate('/wish') }}>
        <NavLink to='/wish' className={(e) => { return e.isActive ? "red" : "green" }}><img src="/wishlist.png" alt="" /></NavLink>
        <NavLink to='/wish' className={(e) => { return e.isActive ? "red" : "green" }}>WishList</NavLink>
      </div>
      <div className="sign" onClick={() => { navigate('/login') }}>
        <NavLink to='/login' className={(e) => { return e.isActive ? "red" : "green" }}><img src="/user (2).png" alt="" /></NavLink>
        <NavLink to='/login' className={(e) => { return e.isActive ? "red" : "green" }}>{name?.Username ? name?.Username : "Sign in"}</NavLink>
      </div>
    </div>

  )
}

export default Navbar
