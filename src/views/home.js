import React from "react";
import { withRouter } from "react-router-dom";

import SpiderComm from "../components/spidercomm.js";
import Navbar from "../components/navbar.js";
import LoggedProfile from "../components/loggedProfile.js";
import MarvelService from "../app/service/marvelService.js";

import "../styles/home.css";

class Home extends React.Component {
  state = {
    name: "",
    profile: "",
    loggedUserName: "",
  };

  constructor() {
    super();
    this.marvelService = new MarvelService();
  }

  goToComics = () => {
    this.props.history.push("/comics");
  };

  goToChars = () => {
    this.props.history.push("/characters");
  };

  render() {
    return (
      <div className="main">
        <Navbar>
          <LoggedProfile />
        </Navbar>
        <div className="wrapper">
          <SpiderComm>
            <h2 className="title-red">Boas vindas!</h2>
            <p>
              {" "}
              Sabia que poderia contar contigo. Agora, vamos ao que interessa.
              Agora você tem acesso à todos os comics e todos os characters do
              universo Marvel. Selecione um dos dois ali embaixo e comece sua
              jornada!
            </p>
          </SpiderComm>
          <div className="comics-chars">
            <div className="home-comics">
              <button className="home-btn" onClick={this.goToComics}>
                Comics
              </button>
            </div>
            <div className="home-characters">
              <button className="home-btn" onClick={this.goToChars}>
                Characters
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
