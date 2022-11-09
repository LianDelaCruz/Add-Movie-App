//make a form for log in and sign up

const UserForm = (props) => {
  const user = {
    email: "",
    password: "",
  };

  const submitForm = (e) => {
    e.preventDefault();

    props.onSubmit && props.onSubmit(user)
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          required
          type="text"
          placeholder="write your e-mail"
          onChange={(e) => (user.email = e.target.value)}
        />
        <input
          type="password"
          placeholder="write password"
          onChange={(e) => (user.password = e.target.value)}
        />
        <input type="Submit" onClick={submitForm} />
      </form>
    </div>
  );
};
export default UserForm;
