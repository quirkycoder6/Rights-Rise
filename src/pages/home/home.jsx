import './home.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import {useNavigate} from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <Header/>
      <div className="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem tempora sapiente temporibus fuga corrupti distinctio debitis, reprehenderit eum praesentium. Quis soluta iure hic accusamus neque modi dignissimos sunt dicta?</p>
        <div className="signup-login">
          <button className='signup' onClick={() => navigate('/signup')} type='button'>Sign-up</button>
          <button className='login' onClick={() => navigate('/login')} type='button'>Log-in</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}