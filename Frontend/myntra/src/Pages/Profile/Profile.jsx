import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState({});
  const Logout = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log(response.data);
      localStorage.removeItem("name");
      navigate('/');
      window.location.reload();


    } catch (error) {

    }
  }
  useEffect(() => {
    const savedItems = localStorage.getItem("name");
    if (savedItems && savedItems !== "undefined") {
      setuserdata(JSON.parse(savedItems));
    }
    else {
      setuserdata("")
    }
  }, [])
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  const Formsubmit = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        console.log(data);

        resolve("Success");

      }, 3000);
    })
  }
  useEffect(() => {
    setValue("Name", userdata.Username);
    setValue("email", userdata.Email);
    setValue("phone", userdata.PhoneNumber);
  }, [userdata])

  return (
    <div className='user-profile'>
      <div className="accounts">
        <h2>Accounts</h2>
        <p>{userdata&&userdata.Username}</p>
       
          <form onSubmit={handleSubmit(Formsubmit)}>
            <label>User Name</label>
            <input type="text" {...register("Name")} readOnly />
            <label>User Email ID</label>
            <input type="email" {...register("email")} readOnly />
            <label>User Phone Number</label>
            <input type="tel"  {...register("phone")} readOnly />
            <label>Address</label>
            <input type="text" {...register("address")} />
            <label>Pin code/Zip code</label>
            <input type="number"  {...register("pin")} />
            <input type="submit" value={isSubmitting ? "saving...." : "save"} disabled={isSubmitting} />
          </form>
       
        <div className="logout">
          <button onClick={() => { Logout() }}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
