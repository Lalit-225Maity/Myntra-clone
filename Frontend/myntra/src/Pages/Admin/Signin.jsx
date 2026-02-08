import React from 'react'
import { useForm } from 'react-hook-form'
import './Signin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Signin = () => {
  const [err, seterr] = useState('');
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm();
  const submit = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await axios.post('/api/create', data);
          resolve("Success");
          navigate('/login')
        } catch (error) {
          console.log(error.response.data.message);
          seterr(error.response.data.message)

        }

      }, 3000);
    })
  }
  return (
    <div className='signin'>
      <form onSubmit={handleSubmit(submit)}>
        <label>Enter Your Name</label>
        <input type="text" placeholder='Enter your name' {...register("Username")} />
        <label>Enter Your Email</label>
        <input type="email" placeholder='Enter Email ID' {...register("Email")} />
        <label>Enter Your Phone Number</label>
        <input type="tel" placeholder='Enter PhoneNumber' {...register("PhoneNumber")} />
        <label>Create Password</label>
        <input type="password" placeholder='Password' {...register("Password")} />
        <label>Re-Enter Password</label>
        <input type="password" placeholder='Re-Type' {...register("rePassword")} />
        <input type="submit" value={isSubmitting ? "submitting......" : "submit"} disabled={isSubmitting} />
      </form>
      {err && <p style={{color:"red"}}>{err}</p>}
    </div>
  )
}

export default Signin
