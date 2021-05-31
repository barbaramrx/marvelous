import React from 'react'
import '../styles/loggedprofile.css'

import Icons from '../components/icons.js'

import UserService from '../app/service/userservice';
import AuthService from '../app/service/authservice';



class LoggedProfile extends React.Component{

    state = {
        name: localStorage.getItem('token_name'),
        profile: localStorage.getItem('token_profile')
    }

    constructor() {
        super();
        this.userService = new UserService();
    }

    componentDidMount() {

    }

    getIcon(icon) {
        switch(icon) {
            case 'captain marvel':
                return Icons.profilePicCptMarvel
            case 'dark phoenix':
                return Icons.profilePicDarkPhoenix
            case 'iron man':
                return Icons.profilePicIronMan
            case 'black panther':
                return Icons.profilePicBlackPanther
            default:
                console.log("Icon não encontrado.")            
        }
    }

    logout = () => {
        AuthService.removeAuth()
    }


    render() {
        return(
            <a href="#/" onClick={this.logout} className="dropdown-menu logged-user font-bebas">Olá, {this.state.name}!
                <img src={this.getIcon(this.state.profile)} alt={this.state.teste} className="profile-picture"></img>
                <span href="#/login" className="exit"></span>
            </a>
        )
    }
}

export default LoggedProfile