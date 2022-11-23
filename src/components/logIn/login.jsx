import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, setLoggedInUser } from "../../helpers/localStorage";
import UserForm from "../form/form";
import Modal from "../modal/modal";

const LogIn = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const logInUser = (user) => {
    const storedUsers = getUsers();
    const foundUser = storedUsers.find((storedUser) => {
      const emailsMatch = user.email === storedUser.email;
      const passMatch = user.password === storedUser.password;
      return emailsMatch && passMatch;
    });
    if (foundUser) {
      setLoggedInUser(foundUser.email);
      navigate("/");
    } else {
      setShowModal(true);
    }
  };

  const hideLogInModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="login-wrapper">
        <h3>Log In:</h3>
        <UserForm onSubmit={logInUser}/>
      </div>
      <Modal
        handleClick={hideLogInModal}
        modalMessage={"user not found"}
        show={showModal}
      />
    </div>
  );
};

export default LogIn;
