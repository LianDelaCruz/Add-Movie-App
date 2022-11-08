//connect form to log in
//connect login to profile
import { useState } from "react";
import { getUsers } from "../../helpers/localStorage";
import UserForm from "../form/form";
import Modal from "../modal/modal";

const LogIn = (props) => {
  const [showModal, setShowModal] = useState(false);

  const logInUser = (user) => {
    const storedUsers = getUsers();
    const foundUser = storedUsers.find((storedUser) => {
      return (
        user.email === storedUser.email && user.password === foundUser.password
      );
    });
    console.log(foundUser);
    if (foundUser) {
      //log in user here to render in profile
    } else {
      setShowModal(true);
    }
  };

  const hideLogInModal = () => {
    console.log("it works in log in!");
    setShowModal(false);
  };

  return (
    <div>
      <h2>Log In:</h2>
      <UserForm onSubmit={logInUser} />
      <Modal
        handleClick={hideLogInModal}
        message={"you must sign up first!"}
        show={showModal}
      />
    </div>
  );
};

export default LogIn;
