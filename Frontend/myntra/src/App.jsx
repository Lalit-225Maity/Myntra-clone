import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
import Kids from './Pages/Kids/Kids'
import Wish from './Pages/Wishlist/Wish'
import Signin from './Pages/Admin/Signin'
import ProductItem from './Pages/Products/ProductItem'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Admin/Login/Login'
import Shop from './services/Shop'
import Update from './Pages/Admin/Update/Update'
import { useLocation } from 'react-router-dom'
import Buy from './Pages/Cart/Buy'
import Checkout from './Pages/Cart/Checkout.'


const App = () => {

  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/items' element={<ProductItem />} />
        <Route path='/login' element={<Login />} />
        <Route path='/service' element={<Shop />} />
        <Route path='/update' element={<Update />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/checkout' element={<Checkout />} />

      </Routes>
    </div>
  )
}

export default App
