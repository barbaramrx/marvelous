import React from 'react'
import '../styles/navbar.css'
import marvelousLogo from '../assets/img/logo.png'

class Navbar extends React.Component{
    render() {
        return(
            <header>
                <div className="header-left">
                    <a href="#/home">
                        <img className="logo" src={marvelousLogo} alt="the Marvelous logo" />
                    </a>
                </div>
                <div className="header-right">
                    {this.props.children}
                </div>
            </header>
        )
    }
}

export default Navbar