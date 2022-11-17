//connect to index as route
import LogIn from "../../components/logIn/login";
import SignUp from "../../components/signUp/signup";

const Profile = (props) => {
return (
    <div className="profile-wrapper">
        <LogIn/>
        <SignUp/>
    </div>
)
}

export default Profile;