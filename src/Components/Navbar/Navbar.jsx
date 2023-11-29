import React, { useContext, useState } from "react";
import App from "../../App";
import './Navbar.css'
import logo from '../Assets/braco_logo.png'
import cart from '../Assets/shopping-cart.png'
import {Link} from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu,setmenu]= useState("shop")
    const{getTotalItems}=useContext(ShopContext);
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=" "/>
                <p>SUPLESHOP</p>
            </div>
            <ul className="nav-Menu">
                <li onClick={()=>{setmenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link><hr/></li>
                <li onClick={()=>{setmenu("suplementos")}}><Link style={{ textDecoration: 'none' }} to='/suplementos'>Suplementos</Link><hr/></li>
                <li onClick={()=>{setmenu("acessorios")}}><Link style={{ textDecoration: 'none' }} to='/acessorios'>Acessorios</Link><hr/></li>
                <li onClick={()=>{setmenu("kits")}}><Link style={{ textDecoration: 'none' }} to='/kits'>Kits</Link><hr/></li>
            </ul>
            <div className="Nav-login">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt=""/></Link>
                <div className="Nav-cart-count">{getTotalItems()}</div>
            </div>
        </div>
    )
}

export default Navbar