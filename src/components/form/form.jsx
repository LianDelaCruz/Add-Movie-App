//make a form for log in and sign up

const UserForm = (props) => {
  const user = {
    email: "",
    password: "",
  };

  const submitUserForm = (e) => {
    e.preventDefault();

    props.onSubmit && props.onSubmit(user);
  };

  return (
    <div className="user-cont">
      <div className="form-cont">
        <form onSubmit={submitUserForm}>
          <input
            className="user-input"
            required
            type="text"
            placeholder="write your username"
            onChange={(e) => (user.email = e.target.value)}
          />
          <input
            className="user-input"
            type="password"
            placeholder="write password"
            onChange={(e) => (user.password = e.target.value)}
          />
          <input
            className="user-input"
            type="Submit"
            onClick={submitUserForm}
          />
        </form>
      </div>
    </div>
  );
};
export default UserForm;
