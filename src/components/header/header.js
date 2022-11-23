import React from "react";
import { NavLink } from "react-router-dom";
//import { logOut } from "../../helpers/localStorage";

const Header = () => {
  return (
    <header className="header-cont header-font">
      <NavLink className="header-navlink" to="/">
        Home
      </NavLink>
      <NavLink className="header-navlink" to="/profile">
        Log in/Sign up
      </NavLink>
      {/* <button onClick={() => logOut()}>Log out</button> */}
    </header>
  );
};

export default Header;
