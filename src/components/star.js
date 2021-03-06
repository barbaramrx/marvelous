import React from 'react'
import '../styles/loggedprofile.css'

import { Icon } from '@iconify/react';
import bxsStar from '../assets/icons/bxs-star';

import UserCharService from '../app/service/usercharservice';
import UserComicService from '../app/service/usercomicservice';

import {errorMsg, successMsg} from '../components/toastr.js'

class Star extends React.Component{

    state = {
        style: '',
        favs: [],
        isFav: 'false'
    }

    constructor() {
        super();
        this.userCharService = new UserCharService();
        this.userComicService = new UserComicService();
    }

    componentDidMount() {
        const parent = this.props.parent

        if(parent === "character") {
            this.checkFavCharacter(this.getUserId())
        } else {
            this.checkFavComic(this.getUserId())
        }        
    }

    getUserId = () => {
        //pega no local storage o usuario logado
        const userId = localStorage.getItem('token_id')

        return userId;
    }

    checkFavCharacter = (userId) => {
        this.userCharService.checkFav(userId)
            .then(response => {
                this.setState({
                    favs: response.data,
                })
                
                this.findFavorite()
            }).catch(err => {
                console.log(err.response)
            })
    }

    checkFavComic = (userId) => {
        this.userComicService.checkFav(userId)
            .then(response => {
                this.setState({
                    favs: response.data
                })

                this.findFavorite()
            }).catch(err => {
                console.log(err.response)
            })
    }

    findFavorite = () => {
        this.state.favs.forEach(current => {
            const idFav = current.id
            const idProps = this.props.id

            if (idFav === idProps) {
                this.setState({
                    style: '#FFD700',
                    isFav: 'true'
                })
            } else {
                this.setState({
                    isFav: 'false'
                })
            }
        });
    }

    addFav = (e) => {  
        const userId = this.getUserId()
        const parent = this.props.parent
        
        const fav = {
            id: this.props.id,
            name: this.props.name
        }

        if(parent === "character") {

            this.userCharService.save(userId, fav)
                .then(response => {

                    e.target.style.color = "#FFD700"
                    successMsg('Voc?? favoritou o personagem!')
                    this.setState({
                        isFav: 'true'
                    })

                }).catch(err => {
                    console.log(err.response)
                })
                
        } else {
    
            this.userComicService.save(userId, fav)
                .then(response => {

                    e.target.style.color = "#FFD700"
                    successMsg('Voc?? favoritou a comic!')
                    this.setState({
                        isFav: 'true'
                    })

                }).catch(err => {
                    errorMsg('Esta comic j?? est?? na sua lista de favoritos.')
                })
        }
    }

    render() {
        return(
            <Icon icon={bxsStar} className="fav" style={{color: `${this.state.style}`, fontSize: '42px'}} onClick={e => {this.addFav(e)}}/>
        )
    }
}

export default Star