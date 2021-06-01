import React from 'react'
import '../styles/loggedprofile.css'

import Icons from '../components/icons.js'

import { InlineIcon } from '@iconify/react';
import bxsExit from '../assets/icons/bxs-exit';

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
                <InlineIcon href="#/" icon={bxsExit} style={{color: '#ffffff', fontSize: '42px'}} className="exit" />
            </a>
        )
    }
}

export default LoggedProfile