//connect form to log in
//connect login to profile
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../helpers/localStorage";
import UserForm from "../form/form";
import Modal from "../modal/modal";
import { authorizedUser } from "../../constants/storageKeys";
//import { saveLoggedInUser } from "../../helpers/localStorage";


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
      localStorage.setItem(authorizedUser, foundUser.email)
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
