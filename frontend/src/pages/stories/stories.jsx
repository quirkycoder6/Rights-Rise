import './stories.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router-dom'
import Profile from '../../components/profile/profile'
import Video from '../../components/video/video'

export default function Stories() {

    const navigate = useNavigate();

  return (
    <div className='container-stories'>
      <Header/>
      <div className="body-stories">
        <div className="main-section-stories">
            <Video/>
        </div>
        <div className="sub-section-stories">
            <Profile/>
            <button onClick={() => navigate('/acc-home')}>Back to menu</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
