<template>
  <div class="col-12 text-center">
  <v-row >
  <v-col class="col-4"></v-col>
  <v-col class="col-4"></v-col>
  <v-col class="col-4">
  <v-icon large class="">mdi-basket</v-icon>
  {{numcart}}
  </v-col>


  </v-row>
    <h2>รายการสินค้า {{numcart}}</h2>
    <br>
    <div class="row">
      <div
        class="col-lg-2 col-md-3 col-sm-4 col-xs-3"
        v-for="(productlists, index) in productlist"
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
          <p>{{ productlists.name }}</p>

          <b-card-text> ปี 1996 </b-card-text>
              จำนวน
              <b-badge variant="light"
                >{{ productlists.qty }}
                <span class="sr-only">unread messages</span></b-badge
              >
         
          <v-btn color="success" @click.prevent="addcart(productlists)" variant="outline-primary">
          
                  <v-icon  font-scale="1">mdi-cart-plus</v-icon></v-btn>
        </b-card>
      </div>
      {{currentCart}}
   
    </div>
  </div>
</template>
<script>
import ProductService from "../../services/product.service";
export default {
  data() {
    return {
      productlist: "",
      cart:[],
      numcart:''
      
    };
  },
  computed: {
    currentCart() {
      return JSON.parse(localStorage.getItem('project_cart'))
    }

  },
  methods:{
    addcart(item){
      console.log(item)
      this.cart.push(item)
      var checkcart = []
      checkcart = localStorage.getItem('project_cart')
      if(!checkcart){
        var project_cart = ['']
        this.numcart = project_cart.length
      }else{
        
        project_cart = JSON.parse(localStorage.getItem('project_cart'));
        console.log(project_cart)
        this.numcart = project_cart.length

      }
      project_cart.push(item)
      localStorage.setItem("project_cart",JSON.stringify(project_cart));
    }
  },
  mounted() {
    ProductService.getProduct().then((responnse) => {
    this.productlist = responnse.data;
    });
  },
};
</script>