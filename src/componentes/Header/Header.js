import React from 'react';
import NavBar from './Navbar/NavBar';
import Carrito from './Carrito/Carrito';
import './Header.css';


const Header=()=>{
    return(
    <header>
        <div>
        <img  src="https://i.ibb.co/qjq1LQz/Recurso-14.png" alt="" id="logo"></img>
        <img src="https://i.ibb.co/JnV4bSK/Recurso-1.png" id="nombreMarca"></img>
        <Carrito />
        </div>
       
        <NavBar />
       <h3>¡Bienvenido a Carté & Design!</h3>
    </header>
        
    ) 
        
}

export default Header