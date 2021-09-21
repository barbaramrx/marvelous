import React from "react";
import "../styles/loggedprofile.css";

import { Icon } from "@iconify/react";
import bxsStar from "../assets/icons/bxs-star";

class Star extends React.Component {
  state = {
    style: "",
    favs: [],
    isFav: "false",
  };

  addFav = (e) => {
    console.log("Ação de favoritar!");
  };

  render() {
    return (
      <Icon
        icon={bxsStar}
        className="fav"
        style={{ color: `${this.state.style}`, fontSize: "42px" }}
        onClick={(e) => {
          this.addFav(e);
        }}
      />
    );
  }
}

export default Star;
