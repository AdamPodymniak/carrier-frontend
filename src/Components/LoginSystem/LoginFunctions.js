import axios from 'axios';
import {domain} from '../GLOBAL_VARIABLES';

class Login{
    static parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    static async isLogged()
    {
        if(localStorage.getItem('access_token') == null)
            {
                return false;
            }

        const jwt = this.parseJwt(localStorage.getItem('access_token'))
        return Date.now() >= jwt.exp * 1000;
    }
    static async getToken()
    {
        await this.refreshToken();
        return localStorage.getItem('access_token')
    }
    static async refreshToken()
    {
        if(localStorage.getItem('refresh_token') == null)
        {
            return false;
        }

        return await axios.post(domain + 'auth/', {'refresh': localStorage.getItem('refresh_token')}, (res) => {
            return res.status === 200;
        })
    }
}

export default Login