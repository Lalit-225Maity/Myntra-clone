import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mandrop from './Dropdown/Mandrop'
const Navbar = () => {
  const [cloth, setcloth] = useState('');
  const Fetch = (e) => {
    if (e.key === 'Enter') {
      navigate('/items', { state: {cloth:cloth } })

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
      <div className="profile" onClick={() => { navigate('/profile') }}>
        <NavLink to='/profile' className={(e) => { return e.isActive ? "red" : "green" }}><img src="/profile.png" alt="" /></NavLink>
        <NavLink to='/profile' className={(e) => { return e.isActive ? "red" : "green" }}>Profile</NavLink>
      </div>
      <div className="wishlist" onClick={() => { navigate('/wish') }}>
        <NavLink to='/wish' className={(e) => { return e.isActive ? "red" : "green" }}><img src="/wishlist.png" alt="" /></NavLink>
        <NavLink to='/wish' className={(e) => { return e.isActive ? "red" : "green" }}>WishList</NavLink>
      </div>
      <div className="sign" onClick={() => { navigate('/signin') }}>
        <NavLink to='/signin' className={(e) => { return e.isActive ? "red" : "green" }}><img src="/user (2).png" alt="" /></NavLink>
        <NavLink to='/signin' className={(e) => { return e.isActive ? "red" : "green" }}>Sign in</NavLink>
      </div>
    </div>

  )
}

export default Navbar
