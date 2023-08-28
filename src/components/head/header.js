import './header.css';
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg';

function Header () {
    return (
        <div className='header'>
            <img id='logo' src={logo} />
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                    
                    
                   
                    
                </ul>
            </nav>
        </div>  
    )
}
export default Header;