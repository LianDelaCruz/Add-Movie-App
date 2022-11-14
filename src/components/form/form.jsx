//make a form for log in and sign up

const UserForm = (props) => {
  const user = {
    email: "",
    password: "",
  };

  const submitUserForm = (e) => {
    e.preventDefault();

    props.onSubmit && props.onSubmit(user)
  };

  return (
    <div>
      <form onSubmit={submitUserForm}>
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
        <input type="Submit" onClick={submitUserForm} />
      </form>
    </div>
  );
};
export default UserForm;
