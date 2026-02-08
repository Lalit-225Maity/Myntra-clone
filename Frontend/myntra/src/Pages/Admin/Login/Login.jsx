import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import axios from 'axios';
const Login = ({setuserdata}) => {
    const navigate = useNavigate();
    const [wrong, setwrong] = useState('');
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors }
    } = useForm();
    const mySubmit = async (data) => {

        try {
            const response = await axios.post('/api/login', data);
            console.log(response.data.user);
       
            localStorage.setItem("name", JSON.stringify(response.data.user));
          
            alert("welcome User")
            navigate('/');
            window.location.reload();
            
        } catch (error) {
            console.log(error.response.data.message);
            setwrong(error.response.data.message)

        }
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit(mySubmit)}>
                <label>Email ID</label>
                <input type="email" name="" id="" placeholder='Enter Your Email ID' {...register("Email")} />
                <label >Password</label>
                <input type="password"  {...register("Password")} />
                <input type="submit" value={isSubmitting ? "submiting...." : "submit"} disabled={isSubmitting} />
                {wrong && <p>{wrong}</p>}
            </form>

            <p onClick={() => { navigate('/signin') }}>Create New Account</p>
            <p onClick={() => { navigate('/update') }}>forgot password?</p>
        </div>
    )
}

export default Login
