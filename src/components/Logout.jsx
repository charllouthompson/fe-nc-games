import {UserContext} from '../contexts/User-context';
import { useContext } from 'react';


const Logout = () => {

    const { logout } = useContext(UserContext)


    return (
        <div>
            <button onClick={logout}>Log out</button>

        </div>
    )

}

export default Logout;