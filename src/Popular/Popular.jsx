import React from 'react'
import './Popular.css'
import data_product from '../assets/Ecommerce_Frontend_Assets/Assets/data'
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'>
        <h1>Gaming Accessories<hr/></h1>
        <div className="popular_item">
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} tag={"pop"}/>
            })}
        </div>
        <button>View More</button>
    </div>
  )
}

export default Popular