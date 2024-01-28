import './login.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LoginComp from '../../components/login/login'

export default function Login() {
  return (
    <div className='container-login'>
      <Header/>
      <div className="body_login">
        <div className="left">
            <p>Welcome back to our community committed to the welfare of children. Log in now to continue your journey with us in upholding and promoting child rights. Your dedicated participation ensures that children worldwide have a voice, protection, and opportunities for a brighter future.</p>
            <p>Together, let's navigate the path towards a world where every child's rights are safeguarded, and their potential is nurtured.</p>
            <p>Thank you for your ongoing commitment to making a meaningful difference in the lives of children.</p>
        </div>
        <div className='right'>
            <LoginComp/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
