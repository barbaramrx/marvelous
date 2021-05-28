import React from 'react';
import Login from '../views/login.js';
import Signup from '../views/signup.js';

import {Route, Switch, HashRouter} from 'react-router-dom';

function Routes() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastre-se" component={Signup}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes