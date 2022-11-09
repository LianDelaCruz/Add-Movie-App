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
      const emailsMatch = user.email === storedUser.email
      const passMatch = user.password === storedUser.password
      return emailsMatch && passMatch
    });
    if(foundUser){
      console.log('successfully logged in')
       //log in user here to render in profile
      //use nagivate here
    } else {
      setShowModal(true)
    }
    
  };

  const hideLogInModal = () => {
    console.log("it works in log in!");
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
