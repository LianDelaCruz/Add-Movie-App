import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header-cont">
        <NavLink>
          <img
            className="logo"
            src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png"
          ></img>
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </header>
    );
  }
}

export default Header;
