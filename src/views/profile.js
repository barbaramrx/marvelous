import React from 'react'
import {withRouter} from 'react-router-dom'

import SpiderComm from '../components/spidercomm.js'
import Navbar from '../components/navbar.js'
import UserService from '../app/service/userservice.js'

import '../styles/signup.css'

import {errorMsg, successMsg} from '../components/toastr.js'
import LoggedProfile from '../components/loggedprofile.js'

class Profile extends React.Component{

    state = {
        id: localStorage.getItem('token_id'),
        name: '',
        email: '',
        password: '',
        profile: ''
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    componentDidMount() {
        const loggedUser = localStorage.getItem('token')

        this.updateInfo(loggedUser)
    }

    updateInfo = (loggedUser) => {
        this.setState({
            name: loggedUser.name,
            email: loggedUser.email,
            password: loggedUser.password,
            profile: loggedUser.profile
        })
    }

    update = () => {

        const id = this.state.id

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            profile: this.state.profile
        }

        this.service.update(id, user)
            .then(response => {
                localStorage.setItem('token', JSON.stringify(response.data))

                const gettingUpdatedUser = localStorage.getItem('logged_user')
                const updatedUser = JSON.parse(gettingUpdatedUser)

                this.updateInfo(updatedUser)

                successMsg('Usuário alterado com sucesso! Atualize a página.')
            }).catch(err => {
                errorMsg(err.response.data)
            })
    }
    

    render(){
        return(
            <div className="main">
                <Navbar>
                    <LoggedProfile />
                </Navbar>
                <div className="list-title">
                    <a href="#/favs" className="title-red bebas-neue">Favoritos</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/characters" className="title-red bebas-neue">Characters</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/comics" className="title-red bebas-neue">Comics</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/profile" className="title-selected title-red bebas-neue">Perfil</a>
                </div>
                <div className="wrapper">
                    <SpiderComm>
                        <h2 className="title-red">Mudança de Identidade?</h2>
                        <p> Não se preocupe! Se precisa mudar alguma coisa, é só preencher aqui embaixo.
                            Nem precisa preencher tudo, basta alterar as informações que você precisa!
                            Sei bem como é, de vez em quando preciso fazer uns... ajustes... na minha,
                            digamos, personalidade. (Não que eu tenha mais de uma. Shhhh. Esta conversa
                            nunca aconteceu, se o Tony te perguntar.)
                        </p>
                    </SpiderComm>
                    <div className="signup-wrap">
                        <fieldset className="signup-form">
                            <div className="signup-form-left">
                                <input type="text"
                                    onChange={e => this.setState({name: e.target.value})}
                                    name="name" id="signup-name" className="signup-name" placeholder="Nome"/>
                                <input type="text"
                                    onChange={e => this.setState({email: e.target.value})}
                                    name="email" id="signup-email" className="signup-email" placeholder="Email"/>
                                <input type="password"
                                    onChange={e => this.setState({password: e.target.value})}
                                    name="password" id="signup-password" className="signup-password" placeholder="Senha"/>
                                <button onClick={this.update} className="btn btn-signup">Confirmar mudanças</button>
                            </div>
                            <div className="signup-form-right">
                                <h2 className="title-red font-bebas">Foto de perfil</h2>
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

export default withRouter(Profile)