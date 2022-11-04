//make a form for log in and sign up

const UserForm = (props) => {
  const userInput = {
    email: "",
    password: "",
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.showInConsole(userInput)
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          required
          type="text"
          placeholder="write your e-mail"
          onChange={(e) => (userInput.email = e.target.value)}
        />
        <input
          type="password"
          placeholder="write password"
          onChange={(e) => (userInput.password = e.target.value)}
        />
        <input type="Submit" onClick={submitForm} />
      </form>
    </div>
  );
};
export default UserForm;
