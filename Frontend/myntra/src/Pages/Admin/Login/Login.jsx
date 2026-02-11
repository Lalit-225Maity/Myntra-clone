import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const [wrong, setwrong] = useState('');
    const [toast, settoast] = useState("")
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors }
    } = useForm();
    const mySubmit = async (data) => {

        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await axios.post('/api/login', data);
                    console.log(response.data.user)
                    if (response.data.success) {
                        resolve("success");
                        localStorage.setItem("name", JSON.stringify(response.data.user));
                        settoast("Welcome User 👋")

                        setTimeout(() => {
                            navigate('/');
                            window.location.reload();
                        }, 3000);
                    }


                } catch (error) {
                    const messages = error.response.data.message;
                    console.log(messages);

                    setwrong(messages)

                }
            }, 3000);
        })


    }
    return (
        <div className='login'>
        {toast&&<div className='alert-user'>{toast}</div>}
            <form onSubmit={handleSubmit(mySubmit)}>
                <label>Email ID</label>
                <input type="email" name="" id="" placeholder='Enter Your Email ID' {...register("Email")} />
                <label >Password</label>
                <input type="password"  {...register("Password")} />
                <input type="submit" value={isSubmitting ? "submiting...." : "submit"} disabled={isSubmitting} />
                {wrong && <p style={{ color: "red" }}>{wrong}</p>}
            </form>
            <p onClick={() => { navigate('/signin') }}>Create New Account</p>
            <p onClick={() => { navigate('/update') }}>forgot password?</p>
        </div>
    )
}

export default Login
