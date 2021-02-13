import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8400/api/products/';

class Productservice{
    getProduct(){
        return axios.get(API_URL,authHeader);

    }
    
}
export default new Productservice