import React from 'react'
import '../styles/loggedprofile.css'

import Icons from '../components/icons.js'

import { InlineIcon } from '@iconify/react';
import bxsExit from '@iconify-icons/bx/bxs-exit';

import UserService from '../app/service/userservice';

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


    render() {
        return(
            <div className="dropdown-menu logged-user font-bebas">Olá, {this.state.name}!
                <img src={this.getIcon(this.state.profile)} alt={this.state.teste} className="profile-picture"></img>
                <InlineIcon icon={bxsExit} style={{color: '#ffffff', fontSize: '42px'}} className="dropdown-menu" />
            </div>
        )
    }
}

export default LoggedProfile