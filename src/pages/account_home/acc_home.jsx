import '../account_home/acc_home.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Acc_home() {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <Header/>
      <div className="body">
        <div className="main-section">
          <div className='menu'>
            <div className='item1'><a href='' onClick={() => navigate('/stories')}>Stories</a></div>
            <div className='item2'><a href='' onClick={() => navigate('/puzzle-game')}>Puzzles and Games</a></div>
            <div className='item3'><a href='' onClick={() => navigate('/legal-abc')}>Legal ABCs</a></div>
          </div>
        </div>
        <div className="center-section">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum, et, ab unde laborum a commodi veniam at accusamus quasi cumque. Rerum aliquid officia voluptates fugit officiis quod, ipsum incidunt?</p>
        </div>
        <div className="sub-section">
            <div className="badge">

            </div>
            <div className="profile">
              <div className='desc'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur error a delectus ipsam voluptate quas porro illo soluta, quod, est ipsa odit natus sapiente incidunt dolorum veniam quaerat necessitatibus assumenda.</p></div>
              <div className='logout'><button onClick={() => navigate('/login')}>Logout</button></div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
