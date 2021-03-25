import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8400/api/products/';

class Productservice{
    gettype(){
        return axios.get(API_URL+'type',authHeader)
    }
    getProduct(){
        return axios.get(API_URL,authHeader);

    }
    addproduct(addproduct){
        console.log(addproduct)
        return axios.post(API_URL,{addproduct},authHeader)
    }
}
export default new Productservice