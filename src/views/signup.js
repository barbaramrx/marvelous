import React from 'react'
import {withRouter} from 'react-router-dom'

import SpiderComm from '../components/spidercomm.js'
import Navbar from '../components/navbar.js'
import UserService from '../app/service/userservice.js'

import '../styles/signup.css'

import {errorMsg, successMsg} from '../components/toastr.js'

class Signup extends React.Component{

    state = {
        name: '',
        email: '',
        password: '',
        profile: ''
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    validation() {
        const msgs = []
        const regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]/

        if(!this.state.name) {
            msgs.push('O campo Nome é obrigatório.')
        }

        if(!this.state.email) {
            msgs.push('O campo Email é obrigatório.')
        } else if(!this.state.email.match(regex)) {
            msgs.push('Preencha o campo Email com um e-mail válido.')
        }

        if(!this.state.password) {
            msgs.push('O campo Senha é obrigatório.')
        }

        if(!this.state.profile) {
            msgs.push('Escolha uma imagem acima.')
        }

        return msgs
    }

    signup = () => {
        const msgs = this.validation()

        if(msgs && msgs.length > 0) {
            msgs.forEach( (msg, index) => {
                errorMsg(msg)
            })

            return
        }

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            profile: this.state.profile
        }

        this.service.save(user)
            .then(response => {
                successMsg('Usuário cadastrado com sucesso! Faça seu login para acessar o sistema.')
                this.props.history.push('/#')
            }).catch(err => {
                errorMsg(err.response.data)
            })
    }

    render(){
        return(
            <div className="main">
                <Navbar>
                    <a className="btn btn-entrar font-bebas" href="#/">Entrar</a>
                </Navbar>
                <div className="wrapper">
                    <SpiderComm>
                        <h2 className="title-red">Junte-se a nós</h2>
                        <p> Ah, você sabe que... com grandes poderes vêm grandes
                            responsabilidades, né? Aquela coisa toda de herói.
                            então, pensei que você pudesse... erm... me ajudar um
                            pouquinho com a parte das grandes responsabilidades?
                            Mas aí, prometo te ajudar com a parte dos grandes poderes!
                            Se cadastra aí e vamos lá.
                        </p>
                    </SpiderComm>
                    <div className="signup-wrap">
                        <fieldset className="signup-form">
                            <div className="signup-form-left">
                                <input type="text"
                                    value={this.state.name} onChange={e => this.setState({name: e.target.value})}
                                    name="name" id="signup-name" className="signup-name" placeholder="Nome"/>
                                <input type="text"
                                    value={this.state.email} onChange={e => this.setState({email: e.target.value})}
                                    name="email" id="signup-email" className="signup-email" placeholder="Email"/>
                                <input type="password"
                                    value={this.state.password} onChange={e => this.setState({password: e.target.value})}
                                    name="password" id="signup-password" className="signup-password" placeholder="Senha"/>
                                <button onClick={this.signup} className="btn btn-signup">Junte-se a nós</button>
                            </div>
                            <div className="signup-form-right">
                                <h2 className="title-red font-bebas">Shh, sem spoiler...</h2>
                                <p>Escolha quem lhe representará.</p>
                                <div className="profile-selector">
                                    <input type="radio" name="profile-pic" id="captain-marvel" value="captain marvel"
                                        onChange={e => this.setState({profile: e.target.value})}/>
                                    <label className="profile-pic profile-captain-marvel" htmlFor="captain-marvel"></label>
                                    <input type="radio" name="profile-pic" id="black-panther" value="black panther"
                                        onChange={e => this.setState({profile: e.target.value})}/>
                                    <label className="profile-pic profile-black-panther" htmlFor="black-panther"></label>
                                    <input type="radio" name="profile-pic" id="dark-phoenix" value="dark phoenix"
                                        onChange={e => this.setState({profile: e.target.value})}/>
                                    <label className="profile-pic profile-dark-phoenix" htmlFor="dark-phoenix"></label>
                                    <input type="radio" name="profile-pic" id="iron-man" value="iron man"
                                        onChange={e => this.setState({profile: e.target.value})}/>
                                    <label className="profile-pic profile-iron-man" htmlFor="iron-man"></label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup)
