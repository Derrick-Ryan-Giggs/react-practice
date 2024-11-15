import React from 'react'
import profilePic from '../assets/author.jpg'
const Card = () => {
  return (
    <div className='card '>
        <img className='card-image' src={profilePic} alt="profile-picture" />
        <h2 className='card-title'> Ryan Giggs</h2>
        <p className='card-text'>I write code for a living</p>
    </div>
  )
}

export default Card