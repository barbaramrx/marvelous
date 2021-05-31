import React from 'react';
import {withRouter} from 'react-router-dom'

import Navbar from '../components/navbar.js'
import UserService from '../app/service/userservice.js'

import '../styles/login.css';

import {errorMsg} from '../components/toastr.js'


class Login extends React.Component{

    state = {
        email: '',
        password: ''
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    login = () => {
        this.service.auth({
            email: this.state.email,
            password: this.state.password,
        }).then(response => {
            //coloca resposta no localStorage
            this.createLocalStorage(response.data)
            this.props.history.push('/home')
        }).catch(err => {
            errorMsg(err.response.data)
        })
    }

    createLocalStorage = (object) => {
        localStorage.setItem('original_token', JSON.stringify(object))
        const gettingLoggedUser = localStorage.getItem('original_token')
        const loggedUser = JSON.parse(gettingLoggedUser)
        localStorage.setItem('token', loggedUser)
        localStorage.setItem('token_id', loggedUser.userId)
        localStorage.setItem('token_name', loggedUser.name)
        localStorage.setItem('token_email', loggedUser.email)
        localStorage.setItem('token_profile', loggedUser.profile)
        localStorage.setItem('token_password', loggedUser.password)
    }

    render(){
        return(
            <div className="main">
                <Navbar>
                    <a className="btn btn-entrar font-bebas" href="#/login">Entrar</a>
                </Navbar>
                <div className="wrapper">
                    <div className="login-wrap">
                        <h2 className="title-red font-bebas">Login</h2>
                        <fieldset className="login-form">
                            <input type="email"
                                value={this.state.email} onChange={e => this.setState({email: e.target.value})}
                                name="email" id="email" className="login-email" placeholder="Email"/>
                            <input type="password"
                                value={this.state.password} onChange={e => this.setState({password: e.target.value})}
                                name="password" id="login-password" className="login-password" placeholder="Senha"/>
                            <button onClick={this.login} className="btn btn-login">Entrar</button>
                        </fieldset>
                        <div className="login-cadastro">
                            <p>Ainda não tem cadastro? <a href="#/cadastre-se" className="login-join">Junte-se a nós!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)