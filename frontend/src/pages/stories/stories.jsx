import './stories.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router-dom'
import Profile from '../../components/profile/profile'

export default function Stories() {

    const navigate = useNavigate();

  return (
    <div className='container'>
      <Header/>
      <div className="body">
        <div className="main-section">
            
        </div>
        <div className="sub-section">
            <Profile/>
            <button onClick={() => navigate('/acc-home')}>Back to menu</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
