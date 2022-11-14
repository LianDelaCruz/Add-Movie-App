import React from "react";
import { useNavigate } from "react-router-dom";
import { authorizedUser } from "./constants/storageKeys";
//import { getLoggedInUser } from "./helpers/localStorage";

const App = (props) => {
  const navigate = useNavigate();
  const addMovie = (user) => {
   
    if (localStorage.getItem(authorizedUser)) {
      navigate("/addmovies");
    } else {
      navigate("/profile");
      console.log("not yet connected to profile");
    }
  };

  return <button onClick={addMovie}>add movie</button>;
};

export default App;
