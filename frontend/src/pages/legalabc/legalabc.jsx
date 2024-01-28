import './legalabc.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router-dom'
import Profile from '../../components/profile/profile'

export default function Legalabc() {
    
    const navigate = useNavigate();

    return (
      <div className='container-legalabc'>
        <Header/>
        <div className="body-legalabc">
          <div className="main-section-legalabc">
              
          </div>
          <div className="sub-section-legalabc">
              <Profile/>
              <button onClick={() => navigate('/acc-home')}>Back to menu</button>
          </div>
        </div>
        <Footer/>
      </div>
    )
}
