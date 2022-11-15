import {useLocation} from "react-router-dom";
const MovieItem = () => {
    const location = useLocation();
    console.log(location.state?.movieItem)
    console.log(location)
    return(
        <div></div>
    )
}

export default MovieItem;