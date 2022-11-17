import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header-cont header-font">
        <NavLink className={'header-navlink'} to="/">Home</NavLink>
        <NavLink className={'header-navlink'} to="/profile">Log in/Sign up</NavLink>
      </header>
    );
  }
}

export default Header;
