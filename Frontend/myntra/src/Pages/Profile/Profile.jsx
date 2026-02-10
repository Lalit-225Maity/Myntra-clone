import React, { useEffect, useState } from 'react'
import './Profile.css'
import { useForm } from 'react-hook-form';
const Profile = () => {
 
  const [userdata, setuserdata] = useState({});
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
       
       
      </div>
    </div>
  )
}

export default Profile
