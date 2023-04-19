<template>
  <v-theme-provider root>
    <v-app id="app">
      <!-- <v-navigation-drawer app v-model="drawer" clipped width="400" color="secondary">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </v-navigation-drawer>

      <v-app-bar clipped-left app elevate-on-scroll scroll-target="mainContainer" color="primary">
        <v-app-bar-nav-icon @click.stop="switchDrawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-uppercase text-center text-xs-h6 text-md-h5">Laboratorios Audiovisuales de Investigación en México</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="switchTheme"><v-icon>{{ $vuetify.theme.dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun' }}</v-icon></v-btn >
      </v-app-bar> -->

      <router-view/>

    </v-app>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    // controla la visibilidad de navigation-drawer
    // drawer: true,
  }),

  methods: {
    /**
     * Intercambiar tema claro a oscuro, y viceversa
     */
    switchTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark)
    },

    /**
     * Muestra/oculta menú lateral
     */
    // switchDrawer: function(){
    //   this.drawer = !this.drawer
    // },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
