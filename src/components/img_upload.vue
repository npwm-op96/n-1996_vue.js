<template>
  <v-col>
  <v-card>
    <v-carousel dark progress-color="red" :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in picture_cal"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
        </v-card>

    <br>
    <v-row class="bg-img">
      <v-col  lg="3" cols="3" v-for="(item, index) in picture_cal" :key="index">
      <v-col class="d-flex justify-center">
      <v-btn color="error" @click="delete_img(index)" fab x-small><v-icon>mdi-close</v-icon></v-btn>
      </v-col>
          <!-- <v-col  > -->
          <v-card class="d-flex justify-center">
                      <v-img width="70" max-width="200" :src="item"></v-img>

          </v-card>
          <!-- </v-col> -->
      </v-col>
      <v-col class="d-flex align-end" cols="3">
        <v-col>
          <v-btn fab large :loading="isSelecting" @click="click_upload">
            <v-icon>mdi-upload</v-icon>
          </v-btn>
          <input
            ref="uploader"
            class="d-none"
            type="file"
            accept="image/*"
            :rules="img_rules"
            @change="upload_img($event)"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  data: () => {
    return {
      picture_cal: [],
      isSelecting: null,

      img_rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
    };
  },
  methods: {
    click_upload() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );
      this.$refs.uploader.click();
    },
    delete_img(index){
        console.log(index)
          this.picture_cal.splice(index, 1);
    },
    upload_img(e) {
      console.log(e.target.files[0]);
      var reader = new FileReader();
      reader.onload = (event) => {
        var img = {
          src: event.target.result,
        };
        this.picture_cal.push(img);
      };
      reader.readAsDataURL(e.target.files[0]);
      console.log(this.picture_cal);
    },
  },
};
</script>
<style scoped>

</style>