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
    }
  };

  return (
    <div>
      {/* <BackgroundVid/> */}
      
      <div className="add-mv-btn-cont">
        <button className="add-mv-btn" onClick={addMovie}>add movie</button>
      </div>
      <Movies />
    </div>
  );
};

export default App;
