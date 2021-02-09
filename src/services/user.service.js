import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8400/api/test';

class UserService{
    getPublicContent(){
        return axios.get(API_URL+'all');
    }
    getUSerBoard(){
        return axios.get(API+'user',{headers:authHeader()});
    }
    getModeratorBoard(){
        return axios.get(API+'mod',{headers:authHeader});
    }
    getAdminBoard(){
        return axios.get(API+'admin',{headers:authHeader});
    }
}

export default new UserService();