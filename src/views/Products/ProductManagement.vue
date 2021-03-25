<template>
  <v-app>
    <v-card class="mx-auto" width="95%">
      <v-card-text>
        <div class="offset-lg-3"><h2>สินค้า</h2></div>
        <v-row>
          <v-col lg="6" md="6" xs="12" cols="12">
            <img_upload ref="img" />
          </v-col>
          <v-col xs="12">
            <v-form ref="addproduct" v-model="valid" lazy-validation>
              <v-text-field
                v-model="obj_addproduct.name"
                :counter="10"
                item-value="id"
                label="ชื่อสินค้า"
                prepend-icon="mdi-rename-box"
                required
              ></v-text-field>

              <v-text-field
                v-model="obj_addproduct.com"
                label="บริษัท"
                prepend-icon="mdi-home-modern"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="obj_addproduct.price"
                label="ราคา"
                prepend-icon="mdi-home-modern"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="obj_addproduct.qty"
                label="จำนวน"
                prepend-icon="mdi-home-modern"
                required
              ></v-text-field>
              <v-select
                @click="gettype"
                prepend-icon="mdi-format-list-bulleted-type"
                v-model="type"
                :items="types"
                item-text="name"
                item-value="id"
                label="Select"
                persistent-hint
                return-object
                single-line
              ></v-select>
              <v-textarea
                v-model="obj_addproduct.des"
                clearable
                prepend-icon="mdi-details"
                clear-icon="mdi-close-circle"
                label="รายละเอียด"
                value="กรอกรายละเอียด"
              ></v-textarea>
              <v-btn @click="addproduct" dark color="success"
                >บันทึกรายการ</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-expand-transition> </v-expand-transition>
    </v-card>
  </v-app>
</template>
<script>
import img_upload from "../../components/img_upload";

export default {
  components: {
    img_upload,
  },

  data: () => ({
    valid: true,
    name: "",
    type:'',
    img: "",
    email: "",
    types:[],
    obj_addproduct: {},
    nameRules: [
      (v) => !!v || "Name is required",
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    select: null,

    items: ["Beer", "Snack", "Wisky", "Other"],
    checkbox: false,
  }),
  created(){
          this.$store.dispatch("product/gettype");    
  },

  methods: {
    addproduct() {
      var img_base64 = this.$refs.img.img_base64;
      console.log(img_base64);
      var base = img_base64;
      this.obj_addproduct.img = base;
      this.obj_addproduct.type = this.type.id
      console.log(this.type)

      console.log(this.obj_addproduct);
      this.$store.dispatch("product/addproduct", this.obj_addproduct);
      this.reset()
    },
    gettype() {
      this.types =  this.$store.getters["product/gettypeproduct"];
    },
    validate() {
      this.$refs.addproduct.validate();
    },
    reset() {
      this.$refs.addproduct.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>