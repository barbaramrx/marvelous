import React from 'react';
import { withRouter } from 'react-router-dom'

import Navbar from '../components/navbar.js'
import LoggedProfile from '../components/loggedprofile.js';
import MarvelService from '../app/service/marvelservice.js'
import Star from '../components/star.js';

import '../styles/lists.css'
import '../styles/filter.css'
import '../styles/singlebox.css'

import UserComicService from '../app/service/usercomicservice.js';

class Character extends React.Component {

    state = {
        comic: []
    }

    constructor() {
        super();
        this.marvelService = new MarvelService();
        this.userComicService = new UserComicService();
    }

    componentDidMount() {
        const url = this.props.location.pathname
        const pieces = url.split('/')
        const comicId = pieces[pieces.length-1]

        this.bringTheComic(comicId) 
    }

    bringTheComic = async (id) => {
        this.marvelService.getSelectedComic(id)
            .then(response => {
                this.setState({
                    comic: response.data.data.results
                })
            }).catch(err => {
                console.log(err.response)
            })
    }

    makeThumbnail = (path, extension) => {
        return `${path}.${extension}`
    }

    makeDescription = (description) => {
        if (!description) {
            return 'Ainda não sabemos muito sobre esta comic. Mas não se preocupe, em breve teremos mais informações aqui!'
        } else {
            return description
        }
    }

    getUrl = (resourceURI) => {
        const url = resourceURI.split('/')
        const urlId = url[url.length-1]

        return urlId
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
                    <a href="#/characters" className="title-red bebas-neue">Characters</a>
                    <p className="title-red bebas-neue">/</p>
                    <a href="#/comics" className="title-selected title-red bebas-neue">Comics</a>
                </div>
                <span className="filter">
                    
                </span>
                <div className="wrapper">
                    {this.state.comic.map(com => {
                        return (
                            <>
                                <div className="single-box" key="com.id">
                                    <Star id={com.id} name={com.title} parent={"comic"} />
                                    <img className="single-thumbnail" src={this.makeThumbnail(com.thumbnail.path, com.thumbnail.extension)} alt="{comic.title}"/>
                                    <h2 className="title-red bebas-neue">{com.title}</h2>
                                    <p>{this.makeDescription(com.description)}</p>
                                </div>
                                <div className="related-box">
                                    <h2 className="title-red bebas-neue">Characters relacionados...</h2>
                                    <ul className="related-list">
                                        {com.characters.items.map((character, index) => {
                                            return (
                                                <li className="related-item" key={index} onClick={() => this.props.history.push({pathname: `/character/${this.getUrl(character.resourceURI)}`, state:{charId: this.getUrl(character.resourceURI)}})}>
                                                    {character.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        )
    }

}

export default withRouter(Character)