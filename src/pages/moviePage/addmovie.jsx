//add form

const AddMovie = (props) => {
  const movieInput = {
    movieName: "",
    shortDescription: "",
    longDescription: "",
  };

  const submitMovie = (e) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(movieInput)
    console.log('does add movie works?')
  };
  return (
    <div>
      <form onSubmit={submitMovie}>
        <input
          type="text"
          placeholder="Write movie name"
          onChange={(e) => (movieInput.movieName = e.target.value)}
        />
        <input
          type=" file"
          placeholder="upload image here"
          onChange={(event) => {
            console.log(event.target.files[0]);
          }}
        />
        <input
          type="text"
          placeholder="Short description"
          onChange={(e) => (movieInput.shortDescription = e.target.value)}
        />
        <input
          type="text"
          placeholder="Long description about the movie"
          onChange={(e) => (movieInput.longDescription = e.target.value)}
        />
        <input type="submit" value="Submit" onClick={submitMovie}/>
      </form>
    </div>
  );
};

export default AddMovie;
