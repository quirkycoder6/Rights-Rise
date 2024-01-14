import './signup.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import SignupComp from '../../components/signup/signup'

export default function Signup() {
  return (
    <div className='container'>
      <Header/>
      <div className="body">
        <div className="left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam beatae illo doloremque. Sunt ipsum, vel sequi enim hic officia alias odio ad doloribus asperiores, cum voluptatum aspernatur, quia itaque!</p>
        </div>
        <div className='right'>
            <SignupComp/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
