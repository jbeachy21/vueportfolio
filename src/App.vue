<template>
  <v-app class="grey-lighten">
    
    <v-content>
      <router-view></router-view>
      <Navbar></Navbar>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default Vue.extend({
  name: 'App',
  components: {
  Navbar,
  Footer
  },
   

  data: () => ({
    //
  }),
});
</script>
