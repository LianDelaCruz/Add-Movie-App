const MovieForm = (props) => {
  const movieInput = {
    title: "",
    img: null,
    shortInfo: "",
    longInfo: "",
  };

  const submitMovie = (e) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(movieInput);
  };
  return (
    <div>
      <form onSubmit={submitMovie}>
        <input
          type="text"
          placeholder="Write movie name"
          onChange={(e) => (movieInput.title = e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          placeholder="upload image here"
          onChange={(event) => {
            const imgUrl = URL.createObjectURL(event.target.files[0])
            movieInput.img = imgUrl
            console.log(event.target.files[0]);
          }} 
        />
        <input
          type="text"
          placeholder="Short description"
          onChange={(e) => (movieInput.shortInfo = e.target.value)}
        />
        <input
          type="text"
          placeholder="Long description about the movie"
          onChange={(e) => (movieInput.longInfo = e.target.value)}
        />
        <input type="submit" value="Submit" onClick={submitMovie} />
      </form>
    </div>
  );
};

export default MovieForm;
