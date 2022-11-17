import React from "react";
import { useNavigate } from "react-router-dom";
import { authorizedUser } from "./constants/storageKeys";
import { getLoggedInUser } from "./helpers/localStorage";
import Movies from "./pages/moviePage/movies";
//import BackgroundVid from './components/backgroundVideo'

const App = (props) => {
  const navigate = useNavigate();
  const addMovie = (user) => {
    if (getLoggedInUser(authorizedUser)) {
      navigate("/addmovies");
    } else {
      navigate("/profile");
      console.log("not yet connected to profile");
    }
  };

  return (
    <div>
      {/* <BackgroundVid/> */}
      <Movies />
      <div className="add-mv-btn-cont">
        <button className="add-mv-btn" onClick={addMovie}>add movie</button>
      </div>
    </div>
  );
};

export default App;
