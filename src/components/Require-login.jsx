import { UserContext } from "../contexts/User-context";
import { useContext } from "react";
import Login from "./Login";

const RequireLogin = ({ children }) => {
    const { isLoggedIn } = useContext(UserContext);

    return isLoggedIn ? children : <Login />;

};

export default RequireLogin;
