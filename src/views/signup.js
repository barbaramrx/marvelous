import React from 'react'
import '../styles/signup.css'
import spideyLogo from '../assets/img/spider_01.png'

class Signup extends React.Component{

    state = {
        name: '',
        email: '',
        password: '',
        profile: ''
    }

    signup = () => {
        console.log('Name: ', this.state.name)
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.password)
    }

    render(){
        return(
            <div className="wrapper">
                <div className="signup-superior">
                    <h2 className="title-red">Junte-se a nós</h2>
                    <p> Ah, você sabe que... com grandes poderes vêm grandes
                        responsabilidades, né? Aquela coisa toda de herói.
                        então, pensei que você pudesse... erm... me ajudar um
                        pouquinho com a parte das grandes responsabilidades?
                        Mas aí, prometo te ajudar com a parte dos grandes poderes!
                        Se cadastra aí e vamos lá.
                    </p>
                    <img className="spider-call" src={spideyLogo} alt="Spider Man" />
                </div>
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
                            <p>Escolha um, ou uma.</p>
                            <div className="profile-selector">
                                <input type="radio" name="profile-pic" id="captain-marvel" value="captain-marvel"/>
                                <label className="profile-pic profile-captain-marvel" htmlFor="captain-marvel"></label>
                                <input type="radio" name="profile-pic" id="black-panther" value="black-panther"/>
                                <label className="profile-pic profile-black-panther" htmlFor="black-panther"></label>
                                <input type="radio" name="profile-pic" id="dark-phoenix" value="dark-phoenix"/>
                                <label className="profile-pic profile-dark-phoenix" htmlFor="dark-phoenix"></label>
                                <input type="radio" name="profile-pic" id="iron-man" value="iron-man"/>
                                <label className="profile-pic profile-iron-man" htmlFor="iron-man"></label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Signup