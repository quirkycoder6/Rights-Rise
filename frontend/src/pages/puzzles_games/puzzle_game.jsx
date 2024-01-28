import './puzzle_game.css'
import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router-dom'
import Profile from '../../components/profile/profile'

export default function PuzzleGame() {
  
    const navigate = useNavigate();

    return (
    <div className='container-puzzle-games'>
        <Header/>
            <div className="body-puzzle-games">
                <div className="main-section-puzzle-games">
                
                </div>
                <div className="sub-section-puzzle-games">
                    <Profile/>
                    <button onClick={() => navigate('/acc-home')}>Back to menu</button>
                </div>
            </div>
        <Footer/>
    </div>
  )
}
