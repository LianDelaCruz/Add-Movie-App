import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "./constants/storageKeys";

const App = (props) => {
  const navigate = useNavigate();
  const addMovie = (user) => {
    //if user is logged in, then kör navigate.
    if (localStorage.getItem(isAuthorized)) {
      navigate("/addmovies");
    } else {
      navigate("/profile");
      console.log("not yet connected to profile");
    }
  };

  return <button onClick={addMovie}>add movie</button>;
};

export default App;
