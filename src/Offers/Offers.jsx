import React from 'react'
import './Offers.css'
import img from '../assets/Ecommerce_Frontend_Assets/Assets/offers.png'


function Offers() {
  return (
    <div className='wrapper'>
      <h1>Current Offers<hr /></h1>
    <div className='offers'>
        <div className="offers1">
            <h1>Exclusive Offers For You</h1>
            <p> ONLY ON BEST SELLING PRODUCTS</p>
            <button>Check Now &rarr;</button>
        </div>
        <div className="offers2">
            <img src={img} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Offers