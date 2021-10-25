import axios from 'axios';
import {domain} from '../GLOBAL_VARIABLES';

async function checkCode(code) {
    return await axios.get(domain + 'auth/verify/email/?code=' + code, (res) =>{
        return res.status === 200;
    });
}

export default checkCode;