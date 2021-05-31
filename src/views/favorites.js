import React from 'react';
import {withRouter} from 'react-router-dom'

import Navbar from '../components/navbar.js'
import LoggedProfile from '../components/loggedprofile.js';

import '../styles/lists.css'
import '../styles/filter.css'
import '../styles/favorites.css'
import UserComicService from '../app/service/usercomicservice.js';
import UserCharService from '../app/service/usercharservice.js';

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
                        {this.state.favChars.map(char => {
                            return(
                                <ul className="fav-char-list" key="char.id">
                                    <li onClick={() => this.props.history.push({pathname: `/character/${char.id}`, state:{charId: char.id}})}>
                                        {char.name}
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className="fav-comics">
                        <h2 className="title-red bebas-neue">Fav Comics</h2>
                        {this.state.favComics.map(comic => {
                            return(
                                <ul className="fav-comic-list" key="comic.id">
                                    <li onClick={() => this.props.history.push({pathname: `/comic/${comic.id}`, state:{comicId: comic.id}})}>
                                        {comic.name}
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Favorites)