import Billservice from '../services/bill.service'
export const bill ={
    namespaced:true,
    state:{
        bill:[],
        bill_detail:[]
    },
    actions:{
        getBill({commit}){
            return Billservice.getbill().then(
            Bill=>{
                commit('getbill',{Bill});
            }
        )
        },
        getbill_detail({commit},id){
            return Billservice.getbill_detail(id).then(
                Bill_detail=>{
                    commit('getbill_detail',{Bill_detail})
                })
        },
    },
    mutations:{
        getbill(state,Bill){
            console.log(Bill.Bill.data)

            state.bill= Bill.Bill.data
        },
        getbill_detail(state,Bill_detail){
            state.bill_detail = Bill_detail.Bill_detail.data
        }
    },
    getters:{
        fetch_bill:state=>state.bill,
        fetch_bill_detail:state=>state.bill_detail
    }
}
