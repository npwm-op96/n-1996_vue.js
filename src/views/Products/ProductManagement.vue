<template>
  <v-app>
    <v-card class="mx-auto" width="95%">
      <v-card-text>
        <div class="offset-lg-3"><h2>สินค้า</h2></div>
        <v-row>
          <v-col lg="6" md="6" xs="12" cols="12">
            <img_upload />
          </v-col>
          <v-col xs="12">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                label="ชื่อสินค้า"
                prepend-icon="mdi-rename-box"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="บริษัท"
                prepend-icon="mdi-home-modern"
                required
              ></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                prepend-icon="mdi-format-list-bulleted-type"
                :rules="[(v) => !!v || 'Item is required']"
                label="ประเภท"
                required
              ></v-select>
              <v-textarea
                clearable
                prepend-icon="mdi-details"
                clear-icon="mdi-close-circle"
                label="รายละเอียด"
                value="กรอกรายละเอียด"
              ></v-textarea>
              <v-btn depressed dark color="success">บันทึกรายการ</v-btn>
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
    img: "",
    email: "",
    nameRules: [
      (v) => !!v || "Name is required",
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    select: null,

    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>