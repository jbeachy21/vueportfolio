<template>
  <v-app class="grey-lighten">
    
    <v-content>
      <Navbar></Navbar>
      <Footer></Footer>
      <router-view>
        

      </router-view>
      
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
