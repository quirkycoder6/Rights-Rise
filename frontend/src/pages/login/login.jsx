import './login.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LoginComp from '../../components/login/login'

export default function Login() {
  return (
    <div className='container'>
      <Header/>
      <div className="body">
        <div className="left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam beatae illo doloremque. Sunt ipsum, vel sequi enim hic officia alias odio ad doloribus asperiores, cum voluptatum aspernatur, quia itaque!</p>
        </div>
        <div className='right'>
            <LoginComp/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
