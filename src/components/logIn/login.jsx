//connect form to log in
//connect login to profile
import UserForm from "../form/form";
const LogIn = (props) => {
    const showInconsole = (show) => {
        console.log(show)
    }

    return(
        <div>
            <UserForm showInconsole={showInconsole}/>
        </div>
    )
}

export default LogIn;