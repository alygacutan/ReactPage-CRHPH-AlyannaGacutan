import React, { Component } from "react";
import { Navlinks } from "../assets/Navlinks";
import "../styles.css";
import { Close, Menu } from "@material-ui/icons";
class Header extends Component {
  state = {
    toggleMenu: false
  };

  onToggleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
    var x = document.getElementById("myTopNav");

    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  };
  renderIcon = () => {
    if (this.state.toggleMenu) {
      return <Close />;
    } else {
      return <Menu />;
    }
  };

  render() {
    return (
      <div className="header">
        <div className="navbar" id="myTopNav">
          <div className="logo navlink">CRHSAMPLE</div>

          <a href="#" className="navlink" style={{ visibility: "hidden" }}>
            NAV
          </a>
          {Navlinks.map((item, index) => {
            return (
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            );
          })}
          <div className="menu-icon" onClick={this.onToggleMenu}>
            {this.renderIcon()}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
