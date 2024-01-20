import React from 'react'
import data from '../assets/Ecommerce_Frontend_Assets/Assets/new_collections'
import Item from '../Item/Item'
import './Newarrival.css'
function Newarrival() {
  return (
    
    <div className='newarrivals'>
        <h1>New Arrivals <hr /></h1>
        <div className="newarrival_items">
        {data.map((item,index)=>{
           return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default Newarrival