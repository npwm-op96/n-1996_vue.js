<template>
    <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
      
        <template v-slot:activator="{ on, attrs }">
         <v-icon  @click="listcart_fn" v-bind="attrs"
            v-on="on" large class="">mdi-basket</v-icon>
            {{$store.getters['cart/getcart'].length}}
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >รายการสินค้าในตะกร้า</v-toolbar>
            <v-card-text  >
           <v-row>
           <v-col></v-col>
        <v-col>ลำดับ</v-col>
        <v-col>ไอดี</v-col>
         <v-col>ชื่อสินค้า</v-col>
         <v-col>จำนวน</v-col>
        <v-col>ราคา</v-col>

        </v-row>
        <v-row v-for="(cartlists, index) in listcart " :key="index">
        <v-col><v-icon @click="deletecart(index)" color="error" large >mdi-delete-circle</v-icon></v-col>
            <v-col>{{index+1}}</v-col>
                    <v-col>{{cartlists.id}}</v-col>

            <v-col>{{cartlists.name}}</v-col>
            <v-col>{{cartlists.qty}}</v-col>
            <v-col>{{1*cartlists.price}} ฿</v-col>

        </v-row>
        <v-row>
              <v-col><v-btn @click="clearcart()" color="error">ล้างตะกร้า</v-btn></v-col>
                 <v-col><v-btn @click="confirmOrder()" color="primary">ชำระ</v-btn></v-col>

         <v-col></v-col>
         <v-col>รวมราคา</v-col>
        <v-col>{{total}} ฿</v-col>

        </v-row>    
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
    name:'Cart',
    data(){
        return{
            listcart:[],
            total:0
        }
    },
    watch:{},
    methods:{
        listcart_fn(){
            var cart =this.$store.getters['cart/getcart']
            console.log(cart)
            this.listcart =cart
            this.total = cart.reduce((sum,a)=>
                sum+a.price,0
            )
        },
        deletecart(index){
                this.$store.dispatch('cart/deletecart',index)
                 this.listcart_fn
        },
        clearcart(){
                this.$store.dispatch('cart/clearcart')
        },
        confirmOrder(){
            this.$store.dispatch('cart/confirmOrder')

        }
        
    },
}
</script>