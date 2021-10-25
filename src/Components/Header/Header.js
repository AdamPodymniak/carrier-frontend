import axios from 'axios';
import Login from '../LoginSystem/LoginFunctions';
import {domain} from '../GLOBAL_VARIABLES';

async function getUserData() {
        const response = await axios.get(domain + 'user/current-user/', { headers: { Authorization: `Bearer ${await Login.getToken()}`} })
        console.log(response.data.username);
        return response.data.username;
}

function Header() {
    return (
        <>
            <h1>LOGO</h1>
            <p>{getUserData()}</p>
        </>
    )
}

export default Header;