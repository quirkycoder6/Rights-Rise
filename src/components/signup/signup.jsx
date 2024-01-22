import './signup.css'
import React, { useState } from 'react'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'
import username_icon from '../../assets/username.png'
import age_icon from '../../assets/age.png'
import { useNavigate } from 'react-router-dom'
import User from './user'



export default function SignupComp() {

    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name_: "",
        age: 0,
        username: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        var {name, value} = e.target;
        if (name === "name_" && value.length > 61) {
            alert("Invalid Name: Name should be less than or equal to 60 characters!");
            e.target.value = '';
        }
        if (name === "age"){
            if (isNaN(value)){
                alert("Invalid Age: Age should be a numeric value only!");
                e.target.value = '';
            }
            else{
                value = parseInt(value, 10);
                if (value > 100){
                    alert("Invalid Age: Age should be a less than 100!");
                    e.target.value = '';
                }
            }
        }
        if (name === "username" && value.length > 16) {
            alert("Invalid Username: Username should be less than or equal to 15 characters!");
            e.target.value = '';
        }

        setDetails((prev) => {
            return { ...prev, [name]: value};
        });
    };
    const submit = (e) => {
        let newuser = new User(details.name_, details.age, details.username, details.email, details.password);
        e.preventDefault();
        console.log(newuser);
        navigate('/acc-home');
    };

  return (
    <div className="signup-container">
        <div className='desc'>
            <div className="signup">Sign-up</div>
            <div className="underline"></div>
        </div>
        <form onSubmit={submit} className="inputs">
            <div className="name">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Enter Name' name="name_" onChange={handleChange}/>
            </div>
            <div className="age">
                <img src={age_icon} alt="" />
                <input type="text" placeholder='Enter Age' name="age" onChange={handleChange}/>
            </div>
            <div className="username">
                <img src={username_icon} alt="" />
                <input type="text" placeholder='Enter Username' name="username" onChange={handleChange}/>
            </div>
            <div className="email">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Enter Email' name="email" onChange={handleChange}/>
            </div>
            <div className="password">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Enter Password' name="password" onChange={handleChange}/>
            </div>
            <div className="signup"><button>Sign-up</button></div>
        </form>
        <div className="options">    
            <div className="-login">Already have an account? <button onClick={() => navigate('/login')}>Log-in</button></div>
        <div/>
    </div>
    </div>
  )
}
