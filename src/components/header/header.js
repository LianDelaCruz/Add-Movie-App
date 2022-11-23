import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../../helpers/localStorage";

const Header = () => {
  return (
    <header className="header-cont header-font">
      <NavLink className="header-navlink" to="/">
        Home
      </NavLink>
      <NavLink className="header-navlink" to="/profile">
        Log in/Sign up
      </NavLink>
      <button onClick={() => logOut()}>Log out</button>
      {/*Show the log out button only when logged in 
      
      {currentUser === movieItem.user && (
                <button onClick={() => handleDeleteClick(movieItem.title)}>Delete</button>
              )}
              
              const currentUser = getLoggedInUser(authorizedUser);*/}
    </header>
  );
};

export default Header;
