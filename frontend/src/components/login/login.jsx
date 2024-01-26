import './login.css'
import React, { useState } from 'react'
import axios from 'axios'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router-dom'
import Validation from '../../pages/login/loginValidation'

export default function LoginComp() {

    const navigate = useNavigate();
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = setErrors(Validation(values));
        console.log(err)
        if(err === "" || err === undefined) {
            // console.log('Hi')
            axios.post('http://localhost:8082/login',values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/acc-home')
                } else {
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
            
        }
    }
  return (
    <div className='login-container'>
        <div className='desc'>
            <div className="login">Log-in</div>
            <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit} className="inputs">
            <div className="inputs">
                <div className="email">
                    <img src={email_icon} alt="" />
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput}
                    className='form-control rounded-0'/>
                    <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                </div>
                <div className="password">
                    <img src={password_icon} alt="" />
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput}
                    className='form-control rounded-0'/>
                    <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                </div>
            </div>
            <div className="submit"><button type='submit'>Log-in</button></div>
        </form>
        <div className="options">
            <div className="-signup">Don't have an account? <button onClick={() => navigate('/signup')}>Sign-up</button></div>
        <div/>
    </div>
    </div>
  )
}
