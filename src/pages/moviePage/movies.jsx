import { useState } from "react";
import { getMovies } from "../../helpers/localStorage";
import { useNavigate } from "react-router-dom";

const Movies = (props) => {
  const navigate = useNavigate();
  const movies = getMovies();
  console.log("submit button for add movie success!");

  const renderMovieItem = (movieItem) => {
    navigate(`/movies/` + movieItem.title, { state: { movieItem } });
  };
  return (
    <div>
      <ul className="movie-list-container">
        {movies.map((movieItem, index) => {
          return (
            <li key={index}>
              <h1>Title: {movieItem.title}</h1>
              <img alt="img" src={movieItem.img}></img>
              <h2>Short Description: {movieItem.shortInfo}</h2>
              <button onClick={() => renderMovieItem(movieItem)}>
                Read more{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
