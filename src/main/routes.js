import React from "react";
import Home from "../views/home.js";
import Comics from "../views/comics.js";
import Characters from "../views/characters.js";
import Comic from "../views/comic.js";
import Character from "../views/character.js";

import { Route, Switch, HashRouter } from "react-router-dom";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/home" component={Home} />
        <Route path="/comics" component={Comics} />
        <Route path="/characters" component={Characters} />
        <Route path="/comic/:id" component={Comic} />
        <Route path="/character/:id" component={Character} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
