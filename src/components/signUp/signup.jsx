import React from "react";
import UserForm from "../form/form";
import { getUsers, saveUser } from "../../helpers/localStorage";
import Modal from "../modal/modal";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      list: [], //for adding users in an array
      user: {
        email: "",
        password: "",
      },
    };
  }

  signUpUser = (user) => {
    const signedUpUser = getUsers();
    const emailIsTheSame = signedUpUser
      ? user.email === signedUpUser.email
      : false;
    if (emailIsTheSame) {
      this.setState({ showModal: true });
    } else {
      console.log("it is a new user");
      saveUser(user);
      //connect to profile to show the add movie thingy
      //google react router go to page
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
