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

import {Route, Switch, HashRouter} from 'react-router-dom'

function Routes() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastre-se" component={Signup}/>
                <Route path="/home" component={Home}/>
                <Route path="/comics" component={Comics}/>
                <Route path="/characters" component={Characters}/>
                <Route path="/comic/:id" component={Comic}/>
                <Route path="/character/:id" component={Character}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/favs" component={Favorites}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes