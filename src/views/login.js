import React from 'react';
import '../styles/login.css';
import {withRouter} from 'react-router-dom'

class Login extends React.Component{

    state = {
        email: '',
        password: ''
    }

    login = () => {
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.password)
    }

    signinUp = () => {
        this.props.history.push('/home')
    }

    render(){
        return(
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
        )
    }
}

export default withRouter(Login)