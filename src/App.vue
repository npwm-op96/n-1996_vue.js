<template>
  <div id="app">
  
    <v-app>
      <v-card height="100%" width="100%">
        <v-app-bar color="#0D47A1" dense flat>
          <v-app-bar-nav-icon color="white"
            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
          <router-link v-if="currentUser" to="/product" class="nav-link">Product</router-link>
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

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          height="100%"
          color="dark"
        >
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/women/85.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <!-- @{{member.logged_in_user.name}} -->
              <v-list-item-content>
                <v-list-item-title class="title">
                   
                </v-list-item-title>
                <v-list-item-subtitle
                  ></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <router-link to="/ProductManagement">
              <v-list-item link>
                <v-list-item-icon><v-icon>mdi-beer</v-icon></v-list-item-icon>
                <v-list-item-title>Product Managment</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
          <v-switch label="Light Mode" v-model="$vuetify.theme.dark"></v-switch>
        </v-navigation-drawer>

        <v-card-text>
          <v-main color="primary" lights-out>
            <router-view>
            
            
            </router-view>
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
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
  .nav-link{
    color: white;
  }
  router-link{
    text-decoration: none !important;
}
</style>