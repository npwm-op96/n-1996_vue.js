import CartService from '../services/cart.service'


export const cart = {
    namespaced:true,
    state:{
        cart:[]
    },
    actions:{
        addcart({commit},product){
            CartService.addcart(product);
            (commit('addcart',{product})) ;    
        },
        deletecart({commit},index){
            CartService.deletecart(index);
            (commit('deletecart',{index})) ;    
        },
        clearcart({commit}){
            CartService.clearcart();
            (commit('clearcart'))
        },
        confirmOrder(){
            CartService.confirmOrder();
            // (commit('clearcart'))
        }
    },
    mutations:{
        addcart(state,{product}){
            state.cart.push(product)
            // console.log(cart)
        },
        deletecart(state,{index}){
            state.cart.splice(index,1)
        },
        clearcart(state){
            state.cart.splice(0)
            console.log(state.cart)
        }
    },
    getters:{
        getcart:state=>state.cart = JSON.parse(localStorage.getItem('cart'))
    }

}