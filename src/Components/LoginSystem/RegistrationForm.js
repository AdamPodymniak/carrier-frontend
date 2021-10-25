import axios from 'axios';
import { domain } from '../GLOBAL_VARIABLES';

async function sendRegister(email, username , firstName, lastName, password)
{
    console.log("dziala?");
    return await axios.post(domain + 'user/create/', {'email': email, 'username' : username, 'password': password, 'first_name': firstName, 'last_name': lastName}, (res)=>{
        return res;
    }).catch((err) =>{
        console.log(err.response);
        return err.response;
    })
}

export default sendRegister;