import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        setTimeout(()=> {
            navigate('/', {state: 'ERROR: NOT PAGE'})
        }, 1000)
    })
    return (
        // <Navigate to={"/"}></Navigate>
        <h1>Not Found</h1>
    );

}

export default NotFound;
