import './signup.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import SignupComp from '../../components/signup/signup'

export default function Signup() {
  return (
    <div className='container'>
      <Header/>
      <div className="body_">
        <div className="left-signup">
            <p>Be a catalyst for positive change! Sign up now to become an integral part of our community dedicated to championing the rights of children. By joining us, you contribute to a collective effort aimed at ensuring every child's well-being, protection, and development.</p>
            <p>Together, let's make a lasting impact and create a world where every child's rights are not just acknowledged but actively defended.</p>
        </div>
        <div className='right-signup'>
            <SignupComp/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


