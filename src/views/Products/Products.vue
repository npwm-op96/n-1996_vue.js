<template>
  <v-col class="col-12 text-center">
    <v-row>
      <v-col class="col-4">
        <Type_Product ref="typeproducts" />
      </v-col>
      <v-col class="col-4"></v-col>
      <v-col class="col-4">
        <cart />
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col
        class="d-flex justify-center"
        lg="2"
        xs="12"
        sm="3"
        md="4"
        v-for="(product, index) in this.$store.getters['product/fetchproduct']"
        :key="index"
      >
        <v-card
          img-src="https://cdn.shopify.com/s/files/1/0066/2791/7914/products/Jameson20CL_1024x1024.jpg?v=1607305632"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 100%; width:100"
          class="mb-2"
        >
          <v-col class="bg-gd-name">
            <h4>{{ product.name }}</h4>
          </v-col>

          <img class="mt-5" contain  :src="product.img" max-width="80%" :height="200" />
          <v-card-text> {{ product.price }} ฿</v-card-text>
          <v-card-text> จำนวน {{ product.qty }}฿</v-card-text>
          <v-card-text> 
                  <v-btn
          fab
          class="btn-cart-gd"
          @click.prevent="addcart(product)"
          variant="outline-primary"
        >
          <v-icon font-scale="1">mdi-cart-plus</v-icon></v-btn
        >
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-col>
</template>
<script>
import Cart from "./Cart.vue";
import Type_Product from "./Type_Product.vue";

export default {
  name: "Product",
  components: {
    Cart,
    Type_Product,
  },

  data() {
    return {
      cart: [],
    };
  },
  computed: {
    // currentCart() {
    //   return JSON.parse(localStorage.getItem('project_cart'))
    // }
  },
  methods: {
    getproduct() {
      var id_type = this.$refs.typeproducts.type_product;
      this.$store.dispatch("product/getProduct", id_type);
    },
    addcart(product) {
      this.$store.dispatch("cart/addcart", product);

    },

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
    this.getproduct();
    console.log(this.$store.getters["product/fetchproduct"]);
    // ProductService.getProduct().then((responnse) => {
    // this.productlist = responnse.data;
    // });
  },
};
</script>
<style scoped>
.btn-cart-gd {
  background: rgb(212, 154, 8);
  background: radial-gradient(
    circle,
    rgba(212, 154, 8, 1) 23%,
    rgba(233, 231, 226, 1) 36%,
    rgba(199, 148, 13, 1) 40%
  );
}
.bg-gd-name {
  background: rgb(182, 176, 169);
  color: azure;
  background: radial-gradient(
    circle,
    rgba(204, 146, 83, 1) 44%,
    rgba(204, 146, 83, 1) 44%
  );
}
</style>