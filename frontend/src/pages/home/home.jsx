import './home.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import {useNavigate} from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='container-home'>
      <Header/>
      <div className="body-home">
        <div className="about">
          <p>Welcome to Rights Rise! We are committed to upholding the fundamental rights of every child as articulated by UNICEF. With a profound dedication to the principles set forth by the United Nations, we strive to create a safe and nurturing environment for children, ensuring their right to survival, development, protection, and participation.</p>
          <p>We believe children of today should have the chance to know about their rights and it is in this inspiration that the idea of Rights Rise, an interactive platform has budded. With the use of immersive stories, puzzles and a personal touch of legal jargons, we hope to impart and motivate young kids as they will be the ones to bring changes in future.</p>
          <p>Join us in championing a future where every child's potential is valued and safeguarded in accordance with the globally recognized standards endorsed by UNICEF.</p>
        </div>
        <div className="options-home">
          <h6>Check out more by logging into our site!</h6>
          <div className="signup-login">
            <button className='signup' onClick={() => navigate('/signup')} type='button'>Sign-up</button>
            <button className='login' onClick={() => navigate('/login')} type='button'>Log-in</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}