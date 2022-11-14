//add form
import MovieForm from "../../components/form/movieForm";
import { useNavigate } from "react-router-dom";

const RenderMovieForm = () => {
  const navigate = useNavigate();
  
  const addMovie = ()=> {
    navigate('/movies')
  }
  
  return (
    <>
    <MovieForm onSubmit = {addMovie}/>
    </>
  )
};

export default RenderMovieForm;
