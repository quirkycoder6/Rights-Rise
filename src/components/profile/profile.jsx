import './profile.css'
import React from 'react'
import profile_icon from '../../assets/profile-pic.png'
import badge_icon from '../../assets/badge.png'

export default function Profile() {
  return (
    <div className='container'>
      <div className="profile-pic">
        <img src={profile_icon} alt=""/>
      </div>
      <div className="profile-info">
        <div className="username_">
            <h4>username</h4>
        </div>
        <div className="badge_">
            <img src={badge_icon} alt="" />
        </div>
        <div className="progress">
            <img src="" alt="" />

        </div>
      </div>
    </div>
  )
}

