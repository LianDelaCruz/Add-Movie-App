//connect form to log in
//connect login to profile
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, saveLoggedInUser } from "../../helpers/localStorage";
import UserForm from "../form/form";
import Modal from "../modal/modal";


const LogIn = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const logInUser = (user) => {
    const storedUsers = getUsers();
    const foundUser = storedUsers.find((storedUser) => {
      const emailsMatch = user.email === storedUser.email
      const passMatch = user.password === storedUser.password
      return emailsMatch && passMatch
    });
    if(foundUser){
      saveLoggedInUser(foundUser.email)
      navigate('/')
      console.log('successfully logged in')
    } else {
      setShowModal(true)
    }
    
  };

  const hideLogInModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      log In:
      <UserForm onSubmit={logInUser} />
      <Modal
        handleClick={hideLogInModal}
        message={"user not found"}
        show={showModal}
      />
    </div>
  );
};

export default LogIn;
