import React from "react";
import UserForm from "../form/form";
import { getUsers, saveUser } from "../../helpers/localStorage";
import Modal from "../modal/modal";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  signUpUser = (newUser) => {
    const storedUsers = getUsers();
    const foundUser = storedUsers.find((storedUser) => {
      const emailsMatch = newUser.email === storedUser.email
      return emailsMatch
    });
    if (!foundUser) {
      saveUser(newUser);
    } else {
      this.setState({ showModal: true });
    }
  }; //this is a function that focus on saving items in the localstorage(helpers folder)

  hideModal = () => {
    console.log("it works!");
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div>
        sign up
        <UserForm onSubmit={this.signUpUser} />
        <Modal
          handleClick={this.hideModal}
          message={"Account already exist!"}
          show={this.state.showModal}
        />
      </div>
    );
  }
}

export default SignUp;
