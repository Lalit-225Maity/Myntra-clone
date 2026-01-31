import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
import Kids from './Pages/Kids/Kids'
import Profile from './Pages/Profile/Profile'
import Wish from './Pages/Wishlist/Wish'
import Signin from './Pages/Admin/Signin'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/signin' element={<Signin />} />
         
      </Routes>
    </div>
  )
}

export default App
