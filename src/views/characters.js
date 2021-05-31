import React from 'react';
import {withRouter} from 'react-router-dom'

import Navbar from '../components/navbar.js'
import LoggedProfile from '../components/loggedprofile.js';
import MarvelService from '../app/service/marvelservice.js'

import { Icon } from '@iconify/react';
import bxsSearchAlt2 from '@iconify-icons/bx/bxs-search-alt-2';

import '../styles/lists.css'
import '../styles/filter.css'

class Characters extends React.Component {

    state = {
        characters: [],
        total: '',
        pagenum: '',
        filter: '',
        id: ''
    }

    constructor() {
        super();
        this.marvelService = new MarvelService();
    }

    componentDidMount() {
        this.bringTheHeroes()
    }

    bringTheHeroes = async () => {
        this.marvelService.getChars()
            .then(response => {
                this.setState({
                    characters: response.data.data.results,
                    total: response.data.data.total,
                    pagenum: response.data.data.total/20
                })
                console.log(this.state.pagenum)
            }).catch(err => {
                console.log(err.response)
            })
    }

    makeThumbnail = (path, extension) => {
        return `${path}.${extension}`
    }

    filter = async () => {
        if(!this.state.filter) {
            return this.bringTheHeroes()
        }

        this.marvelService.filterChars(this.state.filter)
            .then(response => {
                this.setState({
                    characters: response.data.data.results
                })
            }).catch(err => {
                console.log(err.response)
            })
    }

    render() {
        return(
            <div className="main">
                <Navbar>
                    <LoggedProfile/>
                </Navbar>
                <div className="list-title">
                    <a href="#/profile" className="title-red bebas-neue">Perfil</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/favs" className="title-red bebas-neue">Favoritos</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/comics" className="title-red bebas-neue">Comics</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/characters" className="title-selected title-red bebas-neue">Characters</a>
                </div>
                <span className="filter">
                    <input className="filter-input" type="text" placeholder="Faça a sua busca aqui!" onChange={e => this.setState({filter: e.target.value})} />
                    <button onClick={this.filter} className="filter-search">
                        <Icon icon={bxsSearchAlt2} style={{fontSize: '24px'}} />
                    </button>
                </span>
                <div className="wrapper">
                    <div className="list-wrapper">                        
                        {this.state.characters.map((character, index) => {
                            return (
                                <li className="list-box" key="character.id" onClick={() => this.props.history.push({pathname: `/character/${character.id}`, state:{charId: character.id}})}>
                                    <img className="box-thumbnail" src={this.makeThumbnail(character.thumbnail.path, character.thumbnail.extension)} alt="{character.title}"/>
                                    <span className="box-title title-red bebas-neue">{character.name}</span>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Characters)