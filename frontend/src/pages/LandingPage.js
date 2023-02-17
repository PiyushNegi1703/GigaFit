import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/login 1.png'
import logo from '../assets/logo.png'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className="image-container">
        <img src={backgroundImage} alt="img" className='background-image' />

        <div className="logo-container">
            <img src={logo} alt="logo" />
        </div>

        <div className='text-container'>
            <p>Transform your Body, Mind and Soul with <br /> GIGAFIT.</p>
        </div>

        <div className='button-container'>
            <Link to='/login'><button>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
