const MovieForm = (props) => {
  const defImg =
    "https://www.independent.com/wp-content/uploads/2021/11/Popcorn-and-Movie-2.jpg";
  const movieInput = {
    title: "",
    img: null || defImg,
    shortInfo: "",
    longInfo: "",
  };

  const submitMovie = (e) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(movieInput);
  };
  return (
    <div>
      <div className="movie-form-cont">
        <form className="form-wrapper" onSubmit={submitMovie}>
          <label>Title:</label>
          <input
            className="movie-input"
            type="text"
            placeholder="Write movie title"
            onChange={(e) => (movieInput.title = e.target.value)}
          />
          <label>Logo:</label>
          <input
            className="movie-input"
            type="file"
            required
            accept="image/*"
            placeholder="upload image here"
            onChange={(event) => {
              const imgUrl = URL.createObjectURL(event.target.files[0]);
              movieInput.img = imgUrl;
              console.log(event.target.files[0]);
            }}
          />
          <label>Summary:</label>
          <input
            className="movie-input"
            type="text"
            placeholder="Write summary"
            onChange={(e) => (movieInput.shortInfo = e.target.value)}
          />
          <label>Description:</label>
          <input
            className="movie-input"
            type="text"
            placeholder="Write more about the movie"
            onChange={(e) => (movieInput.longInfo = e.target.value)}
          />
          <input
            className="movie-input"
            type="submit"
            value="Submit"
            onClick={submitMovie}
          />
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
