import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-google-plus-g"></i>
        <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="links">
            <p>Home</p>
            <p>Laptop</p>
            <p>Mobiles</p>
            <p>Accessories</p>
        </div>
        <div className="copyright">
            <p>{new Date().getFullYear()} &copy; All Rights Reserved</p>
        </div>
    </div>

  )
}

export default Footer