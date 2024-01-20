import React from 'react'
import './Hero.css'
import img from '../assets/Ecommerce_Frontend_Assets/Assets/hero.png'
function Hero() {
  return (
    <>
    <div className='Hero'>
        <div className="part1">
            <p>Hey There 👋</p>
            <h1>Get Upto 30% Off On New Arrivals</h1>
            <button>Shop Now&rarr;</button>
        </div>
        <div className="part2">
            <img src={img} alt="" />
        </div>
    </div>
  </>
  )
}

export default Hero