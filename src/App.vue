<template>
  <div id="app">
    <v-app>
      <v-card height="100%" width="100%">
        <v-app-bar
          src="https://c0.wallpaperflare.com/preview/669/391/825/lloret-de-mar-spain-guiness-bar.jpg"
          color="#0D47A1"
          dense
          flat
        >
          <v-app-bar-nav-icon v-if="Admin"
            color="white"
            @click="sidebar"
          ></v-app-bar-nav-icon>
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
          <router-link v-if="currentUser" to="/user" class="nav-link"
            >User</router-link
          >
          <router-link v-if="currentUser" to="/product" class="nav-link"
            >Product</router-link
          >
              <router-link v-if="currentUser" to="/Bill" class="nav-link"
            >BILL</router-link
          >
          <v-spacer></v-spacer>
          <router-link v-if="currentUser" to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
          <router-link v-if="!currentUser" to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
          <router-link v-if="!currentUser" to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </v-app-bar>


        <SidebarVue :currentUser="currentUser" ref="SidebarVue"/>
        
        <v-card-text>
          <v-main color="primary" lights-out>
            <router-view> </router-view>
          </v-main>
        </v-card-text>
      </v-card>
      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Dev By Nattapon</strong>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import SidebarVue from './components/Sidebar.vue';
export default {
  components:{
    SidebarVue
  },
  data: () => ({
    // drawer: true,
    group: null,
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    Admin() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
    // showModeratorBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes("ROLE_MODERATOR");
    //   }

    //   return false;
    // },
  },
  methods: {
    sidebar(){
      this.$refs.SidebarVue.opensidebar()
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.nav-link {
  color: white;
}
.v-list-item:hover{
  background-color: #7cd0db;
}
</style>
<style lang="sass" scoped>
.v-list-item .on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
</style>