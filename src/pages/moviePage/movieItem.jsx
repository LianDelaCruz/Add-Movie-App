import {useLocation} from "react-router-dom";

const MovieItem = () => {
    const location = useLocation();
    console.log(location.state?.movieItem)

    return(
        <div>
        <h1>{location.state?.movieItem.title}</h1>
        <img src= {location.state.movieItem.img}></img>
        <h3>{location.state.movieItem.shortInfo}</h3>
        <p>{location.state.movieItem.longInfo}</p>
        </div>
    )
}

export default MovieItem;