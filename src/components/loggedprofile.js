import React from "react";
import "../styles/loggedprofile.css";

import Icons from "./icons.js";

import { InlineIcon } from "@iconify/react";
import bxsExit from "../assets/icons/bxs-exit";

class LoggedProfile extends React.Component {
  state = {
    name: undefined,
    profile: undefined,
  };

  getIcon(icon) {
    switch (icon) {
      case "captain marvel":
        return Icons.profilePicCptMarvel;
      case "dark phoenix":
        return Icons.profilePicDarkPhoenix;
      case "iron man":
        return Icons.profilePicIronMan;
      case "black panther":
        return Icons.profilePicBlackPanther;
      default:
        console.log("Icon não encontrado.");
    }
  }

  render() {
    return (
      <a
        href="#/"
        onClick={this.logout}
        className="dropdown-menu logged-user font-bebas"
      >
        Olá, {this.state.name}!
        <img
          src={this.getIcon(this.state.profile)}
          alt={`Imagem de perfil ${this.state.profile}`}
          className="profile-picture"
        ></img>
        <InlineIcon
          href="#/"
          icon={bxsExit}
          style={{ color: "#ffffff", fontSize: "42px" }}
          className="exit"
        />
      </a>
    );
  }
}

export default LoggedProfile;
