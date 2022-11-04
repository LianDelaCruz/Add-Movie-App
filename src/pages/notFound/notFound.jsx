import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigator = useNavigate();
    const goBack = () => {
        navigator (-1)
    }
 return(
    <div>
        <h1>404 Not Found</h1>
        <br/>
        <button onClick={() => goBack()}>Home</button>
    </div>
 )
}

export default NotFound;