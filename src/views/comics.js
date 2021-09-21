import React from "react";
import { withRouter } from "react-router-dom";

import Navbar from "../components/navbar.js";
import LoggedProfile from "../components/loggedProfile.js";
import MarvelService from "../app/service/marvelService.js";

import { Icon } from "@iconify/react";
import bxsSearchAlt2 from "../assets/icons/bxs-search-alt-2";

import "../styles/lists.css";
import "../styles/filter.css";

class Comics extends React.Component {
  state = {
    comics: [],
    total: "",
    pagenum: "",
    filter: "",
  };

  constructor() {
    super();
    this.marvelService = new MarvelService();
  }

  componentDidMount() {
    this.bringTheStories();
  }

  bringTheStories = () => {
    this.marvelService
      .getComics()
      .then((response) => {
        this.setState({
          comics: response.data.data.results,
          total: response.data.data.total,
          pagenum: response.data.data.total / 20,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  filter = () => {
    if (!this.state.filter) {
      return this.bringTheStories();
    }

    this.marvelService
      .filterComics(this.state.filter)
      .then((response) => {
        this.setState({
          comics: response.data.data.results,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  makeThumbnail = (path, extension) => {
    return `${path}.${extension}`;
  };

  getPagination = () => {
    if (!this.state.total) {
      this.setState({
        pagenum: this.state.total / 20,
      });
    }
    console.log(this.state.pagenum);
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
          <a href="#/characters" className="title-red bebas-neue">
            Characters
          </a>
          <p className="title-red bebas-neue">/</p>
          <a href="#/comics" className="title-selected title-red bebas-neue">
            Comics
          </a>
        </div>
        <div className="list-info">
          <span className="filter">
            <input
              className="filter-input"
              type="text"
              placeholder="Faça a sua busca aqui!"
              onChange={(e) => this.setState({ filter: e.target.value })}
            />
            <button onClick={this.filter} className="filter-search">
              <Icon icon={bxsSearchAlt2} style={{ fontSize: "24px" }} />
            </button>
          </span>
        </div>
        <div className="wrapper">
          <div className="list-wrapper">
            {this.state.comics.map((comic) => {
              return (
                <div
                  className="list-box"
                  key="comic.id"
                  onClick={() =>
                    this.props.history.push({
                      pathname: `/comic/${comic.id}`,
                      state: { comicId: comic.id },
                    })
                  }
                >
                  <img
                    className="box-thumbnail"
                    src={this.makeThumbnail(
                      comic.thumbnail.path,
                      comic.thumbnail.extension
                    )}
                    alt={`${comic.title}`}
                  />
                  <span className="box-title title-red bebas-neue">
                    {comic.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Comics);
