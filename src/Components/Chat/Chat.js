import axios from "axios";
import {domain} from '../GLOBAL_VARIABLES';

class Chat{
    async static getChatRooms(){
        return (await axios.get(domain + '/chat/get-user-groups/', { headers: { Authorization: `Bearer ${await Login.getToken()}` }})).data;
    }

    async static getMessages(id)
    {
        // TODO: get messages
        //TODO: make it works
        //TODO: write TODO
    }
}

export default Chat;