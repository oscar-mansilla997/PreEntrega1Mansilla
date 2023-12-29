import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>*ThirdStar</h1>
        <nav>
            <ul>
                <li>Indumentaria</li>
                <li>Calzado</li>
                <li>Articulos</li>
                <li>Moda</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar