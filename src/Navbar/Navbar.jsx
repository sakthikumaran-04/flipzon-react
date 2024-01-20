import Logo from '../assets/Ecommerce_Frontend_Assets/Assets/logo.png'
import Cart_icon from '../assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png'
import './Navbar.css'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar(){

    const [Menu,setMenu] = useState("Shop");
    const [State,setState] =useState(false);
    function showMenu(){
        setState(true);
    }
    function hideMenu(){
        setState(false);
    }
    return(
    <header>
        <i className="fa-solid fa-bars" onClick={showMenu}></i>
        <div className="Logo">
        <img src={Logo} alt="logo" />
        <h1>Flipzon</h1>
        </div>
        <nav className={State?"active":""}>
            <p onClick={()=>{setMenu("Shop")}}><Link to='/' style={{textDecoration:"none",color:"black"}}>Shop</Link></p>
            <p onClick={()=>{setMenu("Laptop")}}><Link to='/laptop' style={{textDecoration:"none",color:"black"}}>Laptop</Link></p>
            <p onClick={()=>{setMenu("Mobiles")}}><Link to='/mobile' style={{textDecoration:"none",color:"black"}}>Mobiles</Link></p>
            <p onClick={()=>{setMenu("Accessories")}}><Link to='/accessories' style={{textDecoration:"none",color:"black"}}>Accessories</Link></p>
            <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
        </nav>
        <div className="Login">
            <Link to='/login'><button className='Login-btn'>Login</button></Link>
            <Link to='/cart'><img className="Cart_icon" src={Cart_icon} alt="" /></Link>
            <div className="Cart_count">0</div>
        </div>
    </header>
    );
}

export default Navbar