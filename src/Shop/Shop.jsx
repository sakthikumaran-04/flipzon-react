import React from 'react'
import Hero from '../Hero/Hero';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import Newarrival from '../Newarrival/Newarrival';
import Footer from '../Footer/Footer';

function Shop(){

  return(
    <div>
      <Hero />
      <Popular />
      < Offers />
      <Newarrival />
    </div>
  );
}

export default Shop