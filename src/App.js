import React from "react";
import { useNavigate } from "react-router-dom";
//import movies
//button for adding movie

const App = () => {

    const navigate = useNavigate();

    const navigateProfile = () =>{
        navigate("");
    }
    return(
        <button>add movie</button>
    )
}

export default App;