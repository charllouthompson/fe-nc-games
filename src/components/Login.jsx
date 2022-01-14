import { useContext, useState } from "react";
import { UserContext } from "../contexts/User-context";

const Login = () => {
    const [username, setUsername] = useState('')

    const { setUser, user } = useContext(UserContext);

    const handleUserSelection = (event) => {
        const inputVal = event.target.value
        console.log(inputVal)
        setUsername(inputVal)
        setUser({ username })
        
    }


    console.log("username", username)
    console.log("user", user)


    return (
        <form>
            <label id="username"> Username:</label>
            <select id="username-drop" onChange={handleUserSelection}>
            <option  value="jessjelly" id="default-user" >jessjelly</option>
            <option selected disabled value="default" id="default" >Select user</option>
            </select>


        </form>
    )
}

export default Login;