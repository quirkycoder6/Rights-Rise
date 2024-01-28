import '../account_home/acc_home.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from '../../components/profile/profile'

export default function Acc_home() {

  const navigate = useNavigate();

  return (
    <div className='container-acchome'>
      <Header/>
      <div className="body-acchome">
        <div className="main-section-acchome">
          <div className='menu'>
            <div className='item1'><a href='' onClick={() => navigate('/stories')}>Stories</a></div>
            <div className='item2'><a href='' onClick={() => navigate('/puzzle-game')}>Puzzles and Games</a></div>
            <div className='item3'><a href='' onClick={() => navigate('/legal-abc')}>Legal ABCs</a></div>
          </div>
        </div>
        <div className="center-section-acchome">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum, et, ab unde laborum a commodi veniam at accusamus quasi cumque. Rerum aliquid officia voluptates fugit officiis quod, ipsum incidunt?</p>
        </div>
        <div className="sub-section-acchome">
            <Profile/>
            <button onClick={() => navigate('/login')}>Logout</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
