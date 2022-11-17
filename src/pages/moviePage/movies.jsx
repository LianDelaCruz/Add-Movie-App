
import { getMovies } from "../../helpers/localStorage";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, deleteMovie } from "../../helpers/localStorage";
import { authorizedUser } from "../../constants/storageKeys";
import { useState } from "react";

const Movies = (props) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(getMovies());
  const currentUser = getLoggedInUser(authorizedUser);
  
  const goToMoviePage = (movieItem) => {
    navigate(`/movies/` + movieItem.title, { state: { movieItem } });
  };
  const handleDeleteClick = (title) => {
    deleteMovie(title)
    setMovies(getMovies())
  }

  return (
    <div>
      <ul className="movie-list-container">
        {movies.map((movieItem) => {
          return (
            <li key={movieItem.title}>
              <h1>Title: {movieItem.title}</h1>
              <img alt="img" src={movieItem.img}></img>
              <h2>Short Description: {movieItem.shortInfo}</h2>
              <button onClick={() => goToMoviePage(movieItem)}>
                Read more
              </button>
              {currentUser === movieItem.user && (
                <button onClick={() => handleDeleteClick(movieItem.title)}>Delete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
