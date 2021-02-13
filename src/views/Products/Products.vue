<template>
  <div class="col-12 text-center">
    <h2>รายการสินค้า</h2>
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
         
          <b-button href="#" variant="outline-primary">
          
                  <b-icon icon="cart" font-scale="1"></b-icon>
Cart</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import ProductService from "../../services/product.service";
export default {
  data() {
    return {
      productlist: "",
    };
  },
  methods() {},
  mounted() {
    ProductService.getProduct().then((responnse) => {
      console.log(responnse.data);
      this.productlist = responnse.data;
    });
  },
};
</script>