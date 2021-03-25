import Productservice from '../services/product.service'
export const product ={
    namespaced:true,
    state : {
        product:'',
        type:''
    },
    actions:{
        changetype({commit},id_type){
            commit('changetype',{id_type})
        },
        gettype({commit}){
            return Productservice.gettype().then(
                typeproduct=>{
                    commit('typeproduct',{typeproduct})
                }
            )
        },
        getProduct({commit},id_type){
            return Productservice.getProduct().then(
            product=>{
                 product.data.forEach((element,index) => {
                    product.data[index].img = element.img.slice(1,element.img.length-1)
                })
                console.log(product)
                commit('getproduct',{product,id_type});
            }
        )},
        addproduct({commit},addproduct){
            return Productservice.addproduct(addproduct).then(
                data=>{
                    commit('addproduct',{addproduct},data)
                }
            )
        }
    },
    mutations:{
        changetype(){
     
        },
        typeproduct(state,typeproduct){
            state.type = typeproduct.typeproduct.data
        },
        addproduct(){
        },
        getproduct(state,product){
            console.log(product.product.data)
            var type_id = product.id_type
               state.product = product.product.data.filter(product => product.type==type_id);
        }
    },
    getters:{
        fetchproduct:state=>state.product,
        gettypeproduct:state=>state.type

    },

}