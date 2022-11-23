import { useLocation, useNavigate } from "react-router-dom";
const MovieItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBackToMovies = () => {
    navigate(-1);
  };

  return (
    <div className="mv-item-cont">
      <h1 className="font-size">{location.state?.movieItem.title}</h1>
      <img className="mv-img-itm" src={location.state.movieItem.img}></img>
      <h3 className="font-size">{location.state.movieItem.shortInfo}</h3>
      <p className="font-size">{location.state.movieItem.longInfo}</p>
      <button className="go-back-btn" onClick={goBackToMovies}>
        Go Back
      </button>
    </div>
  );
};

export default MovieItem;
