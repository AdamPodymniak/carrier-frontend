import axios from 'axios';
import {domain} from '../GLOBAL_VARIABLES';

async function login(username, password){
    return await axios.post(domain + 'auth/', {'username': username, 'password': password}).then((res)=>{
        let access = res.data.access;
        let refresh = res.data.refresh;

        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);

        return true;
    }).catch(error =>{
        return false;
    })
}

export default login;