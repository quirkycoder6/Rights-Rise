import './signup.css'
import React from 'react'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'
import { useNavigate } from 'react-router-dom'


export default function SignupComp() {

    const navigate = useNavigate();

  return (
    <div className="signup-container">
        <div className='desc'>
            <div className="signup">Sign-up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="name">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Enter Name'/>
            </div>
            <div className="email">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Enter Email'/>
            </div>
            <div className="password">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Enter Password'/>
            </div>
        </div>
        <div className="options">
            <div className="submit"><button onClick={() => navigate('/acc-home')}>Sign-up</button></div>    
            <div className="submit">Already have an account? <button onClick={() => navigate('/login')}>Log-in</button></div>
        <div/>
    </div>
    </div>
  )
}
