import React from "react";
import UserForm from "../form/form";
import { getUsers, saveUser } from "../../helpers/localStorage";
import Modal from "../modal/modal";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalMessage: ''
    };
  }

  signUpUser = (newUser) => {
    const storedUsers = getUsers();
    const foundUser = storedUsers.find((storedUser) => {
      const emailsMatch = newUser.email === storedUser.email;
      return emailsMatch;
    });
    if (!foundUser) {
      saveUser(newUser);
      this.setState({ showModal: true , modalMessage: 'now you can log in!'});
    } else {
      this.setState({ showModal: true, modalMessage: 'Account already exist!' });
    }
  }; //this is a function that focus on saving items in the localstorage(helpers folder)

  hideModal = () => {
    console.log("it works!");
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div>
        <div className="signup-wrapper">
          <h3>Sign Up:</h3>
          <UserForm onSubmit={this.signUpUser} />
        </div>
        <Modal
          handleClick={this.hideModal}
          modalMessage={this.state.modalMessage}
          show={this.state.showModal}
        />
      </div>
    );
  }
}

export default SignUp;
