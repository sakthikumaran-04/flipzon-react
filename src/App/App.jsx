import React from 'react';
import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import Shopcategory from '../Shopcategory/Shopcategory';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import LoginSignup from '../LoginSignup/LoginSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/laptop' element={<Shopcategory category="laptop" />} />
          <Route path='/mobile' element={<Shopcategory category="mobile" />} />
          <Route path='/accessories' element={<Shopcategory category="accessories" />} />
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
