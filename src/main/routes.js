import React from 'react'
import Login from '../views/login.js'
import Signup from '../views/signup.js'
import Home from '../views/home.js'
import Comics from '../views/comics.js'
import Characters from '../views/characters.js'
import Comic from '../views/comic.js'
import Character from '../views/character.js'
import Profile from '../views/profile.js'
import Favorites from '../views/favorites.js'
import AuthService from '../app/service/authservice.js'

import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'

function AuthRoute({component: Component, ...props}) {
    return (
        <Route {...props} render={(componentProps) => {
            if(AuthService.isUserAllowed()) {
                return(
                    <Component {...componentProps} />
                )
            } else {
                return(
                    <Redirect to={ {pathname: '/login', state: {from: componentProps.location}} } />
                )
            }
        } } />
    )
}

function Routes() {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/cadastre-se" component={Signup}/>

                <AuthRoute path="/home" component={Home}/>
                <AuthRoute path="/comics" component={Comics}/>
                <AuthRoute path="/characters" component={Characters}/>
                <AuthRoute path="/comic/:id" component={Comic}/>
                <AuthRoute path="/character/:id" component={Character}/>
                <AuthRoute path="/profile" component={Profile}/>
                <AuthRoute path="/favs" component={Favorites}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes