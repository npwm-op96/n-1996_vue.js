<template>
  <div class="col-12 text-center">
  <v-row >
  <v-col class="col-4"></v-col>
  <v-col class="col-4"></v-col>
  <v-col class="col-4">
  
  <cart/>
  </v-col>
  </v-row>
    
    <br>
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-3"
        v-for="(product, index) in this.$store.getters['product/fetchproduct']"
        :key="index"
      >
        <b-card
          img-src="https://cdn.shopify.com/s/files/1/0066/2791/7914/products/Jameson20CL_1024x1024.jpg?v=1607305632"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem"
          class="mb-2"
        >
          <p>{{ product.name }}</p>

          <b-card-text> {{product.price}} ฿</b-card-text>
              จำนวน
              <b-badge variant="light"
                >{{ product.qty }}
                <span class="sr-only">unread messages</span></b-badge
              >
          <v-btn color="success" @click.prevent="addcart(product)" variant="outline-primary">
          
                  <v-icon  font-scale="1">mdi-cart-plus</v-icon></v-btn>
        </b-card>
      </div>
   
    </div>
  </div>
</template>
<script>
import Cart from './Cart.vue';

export default {
      name: 'Product',
    components: {
      Cart
    },

  data() {
    return {
      cart:[],
    };
  },
  computed: {
    // currentCart() {
    //   return JSON.parse(localStorage.getItem('project_cart'))
    // }

  },
  methods:{
    getproduct(){
      this.$store.dispatch('product/getProduct')

    },
    addcart(product){
      this.$store.dispatch('cart/addcart',product)
    }
    // addcart(item){
    //   console.log(item)
    //   this.cart.push(item)
    //   var checkcart = []
    //   checkcart = localStorage.getItem('project_cart')
    //   if(!checkcart){
    //     var project_cart = ['']
    //     this.numcart = project_cart.length
    //   }else{
        
    //     project_cart = JSON.parse(localStorage.getItem('project_cart'));
    //     console.log(project_cart)
    //     // this.cartlist.push(project_cart)

    //     this.numcart = project_cart.length

    //   }
    //   project_cart.push(item)
    //   localStorage.setItem("project_cart",JSON.stringify(project_cart));
    // }
  },
  mounted() {
    this.getproduct()
    // ProductService.getProduct().then((responnse) => {
    // this.productlist = responnse.data;
    // });
  },
};
</script>