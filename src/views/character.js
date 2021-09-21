import React from "react";
import { withRouter } from "react-router-dom";

import Navbar from "../components/navbar.js";
import LoggedProfile from "../components/loggedProfile.js";
import MarvelService from "../app/service/marvelService.js";
import Star from "../components/star.js";

import "../styles/lists.css";
import "../styles/filter.css";
import "../styles/singlebox.css";

class Character extends React.Component {
  state = {
    character: [],
  };

  constructor() {
    super();
    this.marvelService = new MarvelService();
  }

  componentDidMount() {
    const url = this.props.location.pathname;
    const pieces = url.split("/");
    const charId = pieces[pieces.length - 1];

    this.bringTheHero(charId);
  }

  bringTheHero = async (id) => {
    this.marvelService
      .getSelectedChar(id)
      .then((response) => {
        this.setState({
          character: response.data.data.results,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  makeThumbnail = (path, extension) => {
    return `${path}.${extension}`;
  };

  makeDescription = (description) => {
    if (!description) {
      return "Ainda não sabemos muito sobre este personagem. Mas não se preocupe, em breve teremos mais informações aqui!";
    } else {
      return description;
    }
  };

  getUrl = (resourceURI) => {
    const url = resourceURI.split("/");
    const urlId = url[url.length - 1];

    return urlId;
  };

  render() {
    return (
      <div className="main">
        <Navbar>
          <LoggedProfile />
        </Navbar>
        <div className="list-title">
          <a href="#/favs" className="title-red bebas-neue">
            Favoritos
          </a>
          <p className="title-red bebas-neue">/</p>
          <a href="#/comics" className="title-red bebas-neue">
            Comics
          </a>
          <p className="title-red bebas-neue">/</p>
          <a
            href="#/characters"
            className="title-selected title-red bebas-neue"
          >
            Characters
          </a>
        </div>
        <div className="wrapper">
          {this.state.character.map((char) => {
            return (
              <>
                <div className="single-box" key="char.id">
                  <Star id={char.id} name={char.name} parent={"character"} />
                  <img
                    className="single-thumbnail"
                    src={this.makeThumbnail(
                      char.thumbnail.path,
                      char.thumbnail.extension
                    )}
                    alt={`${char.name}`}
                  />
                  <h2 className="title-red bebas-neue">{char.name}</h2>
                  <p>{this.makeDescription(char.description)}</p>
                </div>
                <div className="related-box">
                  <h2 className="title-red bebas-neue">
                    Comics relacionadas...
                  </h2>
                  <ul className="related-list">
                    {char.comics.items.map((comic, index) => {
                      return (
                        <li
                          className="related-item"
                          key={index}
                          onClick={() =>
                            this.props.history.push({
                              pathname: `/comic/${this.getUrl(
                                comic.resourceURI
                              )}`,
                              state: { charId: this.getUrl(comic.resourceURI) },
                            })
                          }
                        >
                          {comic.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Character);
