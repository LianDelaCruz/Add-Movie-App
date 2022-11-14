import { useState } from "react";
import { getMovies } from "../../helpers/localStorage";
const Movies = () => {
  //const navigate = useNavigate();
  const [movies, setMovies] = useState(getMovies())
  console.log("submit button for add movie success!");

  return (
    <>
      <div>MOVIE PAGE</div>
      {movies.map(movie => <img alt="img" src={movie.img}></img>)
      /*TODO: make ul that has key and value */
      }
    </>
  );
};

export default Movies;
