import './login.css'
import React from 'react'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router-dom'

export default function LoginComp() {

    const navigate = useNavigate();

  return (
    <div className='login-container'>
        <div className='desc'>
            <div className="login">Log-in</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
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
            <div className="submit"><button onClick={() => navigate('/acc-home')}>Log-in</button></div>
            <div className="-signup">Don't have an account? <button onClick={() => navigate('/signup')}>Sign-up</button></div>
        <div/>
    </div>
    </div>
  )
}
