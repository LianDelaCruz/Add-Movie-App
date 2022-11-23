import { useLocation, useNavigate } from "react-router-dom";
const MovieItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBackToMovies = () => {
    navigate(-1)
  }

  return (
    <>
    <div>
      <h1>{location.state?.movieItem.title}</h1>
      <img src={location.state.movieItem.img}></img>
      <h3>{location.state.movieItem.shortInfo}</h3>
      <p>{location.state.movieItem.longInfo}</p>
    </div>
    <button onClick={goBackToMovies}>Go Back</button>
    </>
  );
};

export default MovieItem;
