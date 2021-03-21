<template>
<v-col>
<!-- <v-col v-bind="di_getbill_detail">{{di_getbill_detail}}</v-col> -->
<!-- {{this.di_getbill_detail}} -->
        <v-dialog
          v-model="di_getbill_detail"
          max-width="1000px"
        >
        <!-- <v-btn @opendialog="opendialog()"></v-btn> -->

          <v-card>
            <v-card-title>
              <!-- <span class="headline">{{ formTitle }}</span> -->
            </v-card-title>

            <v-card-text>
              <v-container>
                          <v-row>
      <v-col>รหัสสินค้า</v-col>
    <v-col>ชื่อสินค้า</v-col>
      <v-col>ราคา</v-col>
      <v-col>จำนวน</v-col>
      <v-col>วันที่ซื้อ</v-col>
     </v-row>
              <v-row>

      <v-col
        cols="12"
    
        v-for="(item, index) in this.$store.getters['bill/fetch_bill_detail']"
        :key="index"
      > 

      <v-row>
      <v-col>{{item.id}}</v-col>
    <v-col>{{item.product}}</v-col>
      <v-col>{{item.price}}</v-col>
      <v-col>{{item.qty}}</v-col>
      <v-col>{{item.createdAt}}</v-col>
     </v-row>
      
      </v-col>
              </v-row>
                <v-row>
                    {{total}}
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-dialog>

</v-col>
    
</template>
<script>
export default {
    // props:{
    //     boolean_dialog:Boolean
    // },
    name:'Bill_detail',
    data(){
        return{
            total:0,
            di_getbill_detail:'',
            editedIndex: -1,
            editedItem: {
            name: "",
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: "",
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
      },
 
        }
    },
          //  watch : {
          //      boolean_dialog:function(newVal,oldvalue) {
          //          console.log('di_getbill_detail')
          //          console.log(newVal+''+oldvalue)
          //           this.di_getbill_detail = this.boolean_dialog
          //      },
          //  },
 
    methods:{
        opendialog(){     
                  this.di_getbill_detail = true;

        // console.log('opendialog')   
        // this.di_getbill_detail = this.boolean_dialog
        // console.log(this.boolean_dialog)

        },
    close() {
        this.di_getbill_detail = false;
        this.boolean_dialog =false
        
        this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        // this.$router.push('/');
      });
    },


    }
    
}
</script>