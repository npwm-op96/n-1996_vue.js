<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    height="100%"
    color="dark"
  >
    <v-list img="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <span src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-col class="d-flex justify-center align-center">
          <v-avatar color="primary" size="130">
            <v-img
              class="rounded-circle"
              width="90"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            ></v-img>
          </v-avatar>
        </v-col>
      </span>

      <!-- </v-list-item> -->
      <!-- </v-card> -->
      <v-divider></v-divider>

      <v-list-item link>
        <v-list-item-content v-if="currentUser">
          <v-list-item-title class="title">
            {{ currentUser.username }}
          </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list nav dense>
      <router-link class="nav-link" to="/ProductManagement">
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-beer</v-icon></v-list-item-icon>
          <v-list-item-title>Product</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link class="nav-link" to="/Bill">
        <v-list-item link>
          <v-list-item-icon> <v-icon>mdi-receipt</v-icon></v-list-item-icon>
          <v-list-item-title>Bill</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link class="nav-link" to="/Bill">
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>User</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link class="nav-link" to="/Bill">
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-fingerprint</v-icon></v-list-item-icon>
          <v-list-item-title>Role</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link class="nav-link" to="/Bill">
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-image-album</v-icon></v-list-item-icon>
          <v-list-item-title>Slide Img</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link class="nav-link" to="/Bill">
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-list-status</v-icon></v-list-item-icon>
          <v-list-item-title>Type Product</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
    <v-switch label="Light Mode" v-model="$vuetify.theme.dark"></v-switch>
  </v-navigation-drawer>
</template>
<script>
export default {
    props:{
        currentUser:Array[Object]
    },
    data:()=>{
        return{
            drawer: false,
        }
    },
    mounted(){

    },
    methods:{
        opensidebar(){
        this.drawer = true
        },
    }
}
</script>