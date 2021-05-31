import React from 'react';
import {withRouter} from 'react-router-dom'

import SpiderComm from '../components/spidercomm.js';
import Navbar from '../components/navbar.js'
import LoggedProfile from '../components/loggedprofile.js';
import UserService from '../app/service/userservice.js'
import MarvelService from '../app/service/marvelservice.js'

import '../styles/home.css';

class Home extends React.Component {

    state = {
        name: '',
        profile: '',
        loggedUserName: ''
    }

    constructor() {
        super();
        this.userService = new UserService();
        this.marvelService = new MarvelService();
    }

    goToComics = () => {
        this.props.history.push('/comics')
    }

    goToChars = () => {
        this.props.history.push('/characters')
    }
    
    render() {
        return(
            <div className="main">
                <Navbar>
                    <LoggedProfile />
                </Navbar>
                <div className="wrapper">
                    <SpiderComm>
                        <h2 className="title-red">Boas vindas!</h2>
                        <p> Sabia que poderia contar contigo. Agora, vamos
                            ao que interessa. Agora você tem acesso à todos os
                            comics e todos os characters do universo Marvel.
                            Selecione um dos dois ali embaixo e comece sua jornada!
                        </p>
                    </SpiderComm>
                    <div className="comics-chars">
                        <div className="home-comics">
                            <h1 className="title-red bebas-neue">Comics</h1>
                            <button onClick={this.goToComics}>Teste</button>
                        </div>
                        <div className="home-characters">
                            <h1 className="title-red bebas-neue">Characters</h1>
                            <button onClick={this.goToChars}>Teste</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)