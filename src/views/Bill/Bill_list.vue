<template>
  <v-col>
    <v-row>
      <!-- <v-span></v-span> -->
      <!-- <h1>Bill List</h1> -->
      <v-data-table
        :headers="headers"
        :items="order_detail"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Bill List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
             <Bill_detail ref="bill_detail_popop"/>


          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small v-model="getbill_detail_fn" class="mr-2" @click="getbill_detail(item)"> mdi-eye </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
      <!-- {{this.$store.getters['bill/fetch_bill']}} -->
    </v-row>
  </v-col>
</template>
<script>
import Bill_detail from "./Bill_detail";

export default {
    components:{
        Bill_detail
    },
  data() {
    return {
      boolean_dialog:false,
      headers: [
        {
          //   text: 'Dessert (100g serving)',
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "รหัาผู้ซื้อ", value: "id" },
        { text: "ชื่อผู้ซื้อ", value: "member.username" },
        // { text: 'Carbs (g)', value: 'carbs' },
        // { text: 'Protein (g)', value: 'protein' },
        { text: "Actions", value: "actions", sortable: false },
      ],
      order_detail: [],
      getbill_detail_fn:''


    };
  },

  methods: {
    initialize() {
      this.order_detail = this.$store.getters["bill/fetch_bill"];
    },
    getbill() {
      console.log("getbill");
      this.$store.dispatch("bill/getBill");
    },
    getbill_detail(item) {
      
    this.boolean_dialog = true
    console.log(this.boolean_dialog)
    var id = item.id
    this.$store.dispatch('bill/getbill_detail',id)
          this.$refs.bill_detail_popop.opendialog()

    // .opendialog()
    },
  },
  created() {
    console.log("Hi");
    this.getbill();
    this.initialize();
  },
};
</script>