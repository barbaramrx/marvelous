import React from 'react';
import {withRouter} from 'react-router-dom'

import Navbar from '../components/navbar.js'
import LoggedProfile from '../components/loggedprofile.js'
import UserComicService from '../app/service/usercomicservice.js'
import UserCharService from '../app/service/usercharservice.js'

import '../styles/lists.css'
import '../styles/filter.css'
import '../styles/favorites.css'

import { Icon } from '@iconify/react'
import bxsEraser from '@iconify-icons/bx/bxs-eraser'

import { successMsg } from '../components/toastr.js'

class Favorites extends React.Component {

    state = {
        favComics: [],
        favChars: []
    }

    constructor() {
        super();
        this.userComicService = new UserComicService();
        this.userCharService = new UserCharService();
    }

    componentDidMount() {
        const id = this.getUserId();

        this.getFavChars(id)
        this.getFavComics(id)
    }

    getUserId = () => {
        //pega no local storage o usuario logado
        const userId = localStorage.getItem('token_id')

        return userId;
    }


    getFavChars = (userId) => {
        this.userCharService.checkFav(userId)
            .then(response => {
                this.setState({
                    favChars: response.data
                })
            }).catch(err => {
                console.log(err.response)
            })
    }

    getFavComics = (userId) => {
        this.userComicService.checkFav(userId)
            .then(response => {
                this.setState({
                    favComics: response.data
                })
            }).catch(err => {
                console.log(err.response)
            })
    }

    removeCharacter = (charId) => {

        const userId = this.getUserId()
        
        this.userCharService.deleteChar(userId, charId)
            .then(response => {
                successMsg("O character foi removido de sua lista de favoritos. Atualize a página.")
            }).catch(err => {
                console.log(err.response)
            })


    }

    removeComic = (comicId) => {

        const userId = this.getUserId()
        
        this.userComicService.deleteCom(userId, comicId)
            .then(response => {
                successMsg("A comic foi removida de sua lista de favoritos. Atualize a página.")
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
                    <a href="#/characters" className="title-red bebas-neue">Characters</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/comics" className="title-red bebas-neue">Comics</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/favs" className="title-selected title-red bebas-neue">Favoritos</a>
                </div>
                <div className="wrapper wrapper-fav">
                    <div className="fav-chars">
                        <h2 className="title-red bebas-neue">Fav Characters</h2>
                        <ul className="fav-char-list">
                            {this.state.favChars.map(char => {
                                return(
                                    <>
                                        <li className="fav-item" key="char.id" onClick={() => this.props.history.push({pathname: `/character/${char.id}`, state:{charId: char.id}})}>
                                            {char.name}
                                        </li>
                                        <Icon className="remove-fav" icon={bxsEraser} onClick={() => this.removeCharacter(char.id)} />
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="fav-comics">
                        <h2 className="title-red bebas-neue">Fav Comics</h2>
                        <ul className="fav-comic-list">
                            {this.state.favComics.map(comic => {
                                return(
                                    <>
                                        <li className="fav-item" key="comic.id" onClick={() => this.props.history.push({pathname: `/comic/${comic.id}`, state:{comicId: comic.id}})}>
                                            {comic.name}
                                        </li>
                                        <Icon className="remove-fav" icon={bxsEraser} onClick={() => this.removeComic(comic.id)} />
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Favorites)