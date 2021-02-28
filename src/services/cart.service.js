import axios from 'axios';
import authHeader from './auth-header';

const  API = 'http://localhost:8400/api/order/';


class CartService{
    addcart(product){
        product.qty = product.qty-1
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart==null){
            cart =[]
        }
        cart.push(product)
        localStorage.setItem('cart',JSON.stringify(cart));
        let res  = cart
        return res
    }
    deletecart(index){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart==null){
            cart =[]
        }
        cart.splice(index,1)
        console.log(cart)
        localStorage.setItem('cart',JSON.stringify(cart));
        let res  = cart
        return res
    }
    clearcart(){        
        var cart = [];
        localStorage.setItem('cart',JSON.stringify(cart));
        let  res = cart
        return res
    }
    confirmOrder(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        // console.log(this.$store.state.auth.user.id)
        // let id_user = this.$store.state.auth.user.id
        cart.qty = 1
        const data = {id_member:1,order:cart}
        console.log(cart)

        // data = {}
            return axios.post(API,data,{authHeader});
    }


}
export default new CartService