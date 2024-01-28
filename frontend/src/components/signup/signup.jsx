import './signup.css'
import React, { useState } from 'react'
import axios from 'axios'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'
import age_icon from '../../assets/age.png'
import { useNavigate } from 'react-router-dom'
import SignUpValidation from './SignUpValidation'



export default function SignupComp() {

    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name: "",
        age: 0,
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        var {name, value} = event.target;
        if (name === "name_" && value.length > 61) {
            alert("Invalid Name: Name should be less than or equal to 60 characters!");
            event.target.value = '';
        }
        if (name === "name_" && !isNaN(value.charAt(value.length - 1))) {
            alert("Invalid Name: Name should not contain any number!");
            event.target.value = '';
        }
        if (name === "age") {
            if (isNaN(value)){
                alert("Invalid Age: Age should be a numeric value only!");
                event.target.value = '';
            }
            else{
                value = parseInt(value, 10);
                if (value > 100){
                    alert("Invalid Age: Age should be a less than 100!");
                    event.target.value = '';
                }
            }
        }
        if (name === "username" && value.length > 16) {
            alert("Invalid Username: Username should be less than or equal to 15 characters!");
            event.target.value = '';
        }
        setDetails(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = setErrors(SignUpValidation(details));
        console.log(err)
        if(err === "" || err === undefined) {
            console.log('Hi')
            console.log(details)
            axios.post('http://localhost:8082/signup',details)
            .then(res => {
                console.log('Hello')
                window.alert('Account Creation Successful !')
                navigate('/login')
            })
            .catch(err => console.log(err));
        }
        else {
            console.log(err)
        }
    }
  return (
    <div className="signup-container">
        <div className='desc-signup'>
            <div className="signup">Sign-up</div>
            <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit} className="inputs_">
            <div className="inputs">
                <div className="name">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Enter Name' name="name" onChange={handleInput}/>
                    {/* {<span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>} */}
                </div>
                <div className="age">
                    <img src={age_icon} alt="" />
                    <input type="text" placeholder='Enter Age' name="age" onChange={handleInput}/>
                    {/* <span>{errors.age && <span className='text-danger'>{errors.age}</span>}</span> */}
                </div>
                <div className="email">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Enter Email' name="email" onChange={handleInput}/>
                    {/* <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span> */}
                </div>
                <div className="password">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Enter Password' name="password" onChange={handleInput}/>
                    {/* <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span> */}
                </div>
            </div>
            <div className="signup"><button type='submit'>Sign-up</button></div>
        </form>
        <div className="options_">  
            <div className="-login">Already have an account? <button onClick={() => navigate('/login')}>Log-in</button></div>
        <div/>
    </div>
    </div>
  )
}
