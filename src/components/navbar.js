import React from 'react'
import '../styles/navbar.css'
import marvelousLogo from '../assets/img/logo.png'

function Navbar(){
    return(
        <header>
            <div className="header-left">
                <a href="/#">
                    <img className="logo" src={marvelousLogo} alt="the Marvelous logo" />
                </a>
            </div>
            <div className="header-right">
                <a className="btn btn-entrar font-bebas" href="#/login">Entrar</a>
            </div>
        </header>
    )
}

export default Navbar