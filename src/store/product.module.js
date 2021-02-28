import Productservice from '../services/product.service'
export const product ={
    namespaced:true,
    state : {
        product:''
    },
    actions:{
        getProduct({commit}){
            return Productservice.getProduct().then(
            product=>{
                commit('getproduct',{product});
            }
        )}
    },
    mutations:{
        getproduct(state,product){
            // console.log(product.product)
            state.product = product.product.data
        }

    },
    getters:{
        fetchproduct:state=>state.product

    },

}