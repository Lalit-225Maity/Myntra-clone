import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Profile = () => {
    const [userdata, setuserdata] = useState({});
  const Logout = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log(response.data);
      localStorage.removeItem("name");
      window.location.reload();


    } catch (error) {

    }
  }
  useEffect(() => {
     const savedItems=localStorage.getItem("name");
     if(savedItems!=="undefined"){
       setuserdata(JSON.parse(savedItems));
      
      

     }
  }, [])
  
  return (
    <div className='profile' style={{ marginTop: "180px" }}>
      <h2>{userdata&&userdata.Username}</h2>
      <div className="logout">
        <button onClick={() => { Logout() }}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
