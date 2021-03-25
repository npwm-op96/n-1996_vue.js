<template>
  <v-col>
        <v-select
          @click.prevent="get_type"
          @change="changetype"
          v-model="type_product"
          :items="types"
          menu-props="auto"
          item-text="name"
          item-value="id"
          selected
          persistent-hint
          return-object
          single-line
        ></v-select>
  </v-col>
</template>
<script>
export default {
  name: "Type_Product",
  data: () => {
    return {
           types: [{
               id:0,
               name:'All'
           }],
           type_product:''
    };
  },
  created() {
    this.gettype();
  },
  mounted() {
      

  },
  methods: {

    async  gettype() {
      this.$store.dispatch("product/gettype");

    },
      get_type(){
         this.types=this.$store.getters['product/gettypeproduct']

      },
      getproduct(){
                this.$store.dispatch("product/getProduct");

      },
    changetype(){
        var id_type  = this.type_product.id
        console.log(id_type)
        this.$store.dispatch("product/getProduct",id_type);

    }
      
  },
};
</script>
<style scoped>
</style>