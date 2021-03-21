import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8400/api/order/';

class Billservice{
    getbill(){
        return axios.get(API_URL,authHeader);
    }
    getbill_detail(id){
        console.log(id)
        return axios.get(API_URL+'/order_detail/'+id,{params:{"id":id}},authHeader);
    }
}
export default new Billservice