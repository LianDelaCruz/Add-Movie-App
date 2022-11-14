//add form
import MovieForm from "../../components/form/movieForm";
import { useNavigate } from "react-router-dom";
import { getMovies, saveMovie } from "../../helpers/localStorage";
import { authorizedUser } from "../../constants/storageKeys";
//import { authorizedUser } from "../../constants/storageKeys";

const RenderMovieForm = () => {
  const navigate = useNavigate();
  
  const addMovie = (newMovie)=> {
    const storedMovies = getMovies();
    const foundMovie = storedMovies.find((storedMovies) => {
      const moviesMatch = newMovie.title === storedMovies.title && newMovie.shortInfo === storedMovies.shortInfo && newMovie.longInfo === storedMovies.longInfo
      return moviesMatch
    });
    if(!foundMovie) {
      saveMovie(newMovie, authorizedUser)
      navigate('/movies')
    }
    
  }
  
  return (
    <>
    <MovieForm onSubmit = {addMovie}/>
    </>
  )
};

export default RenderMovieForm;
