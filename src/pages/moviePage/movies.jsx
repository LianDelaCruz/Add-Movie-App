
import { getMovies } from "../../helpers/localStorage";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../../helpers/localStorage";
import { authorizedUser } from "../../constants/storageKeys";
import { useState } from "react";

const Movies = (props) => {
  const navigate = useNavigate();
  //const storedMovies = getMovies();
  const [movies, setMovies] = useState(getMovies());
  const currentUser = getLoggedInUser(authorizedUser);
  
  const renderMovieItem = (movieItem) => {
    navigate(`/movies/` + movieItem.title, { state: { movieItem } });
  };

  const deleteMovie = (title) => {
    /* const usersMovie = storedMovies
    usersMovie.splice(index, 1) */
    /* const loggedInUser = currentUser.find();
    const newList = movies.filter((movie) => movie.title !== title)
    setMovies(newList) */
  };

  return (
    <div>
      <ul className="movie-list-container">
        {movies.map((movieItem) => {
          return (
            <li key={movieItem.title}>
              <h1>Title: {movieItem.title}</h1>
              <img alt="img" src={movieItem.img}></img>
              <h2>Short Description: {movieItem.shortInfo}</h2>
              <button onClick={() => renderMovieItem(movieItem)}>
                Read more
              </button>
              {currentUser === movieItem.user && (
                <button onClick={() => deleteMovie(movieItem.title)}>Delete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
