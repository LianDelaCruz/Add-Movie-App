const MovieForm = (props) => {
  const defImg = 'https://www.independent.com/wp-content/uploads/2021/11/Popcorn-and-Movie-2.jpg'
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
    <div className="user-mv-cont">
      <div className="movie-form-cont">
        <form onSubmit={submitMovie}>
          <input
            className="movie-input"
            type="text"
            placeholder="Write movie name"
            onChange={(e) => (movieInput.title = e.target.value)}
          />
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
          <input
            className="movie-input"
            type="text"
            placeholder="Short description"
            onChange={(e) => (movieInput.shortInfo = e.target.value)}
          />
          <input
            className="movie-input"
            type="text"
            placeholder="Long description about the movie"
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
