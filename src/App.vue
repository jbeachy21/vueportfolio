<template>
  <v-app class="grey-lighten">
    
    <Navbar></Navbar>
    
      
      
      
      <vue-particles color="#dedede" style=" margin-top:50px; margin-bottom:50px; position: fixed; left: 0; right: 0; z-index: 0;"></vue-particles>
     
      
      <router-view>
      
      
      </router-view>
      
    
     

     <Footer></Footer>
     

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
 
import VueParticles from 'vue-particles'
Vue.use(VueParticles)


import { ParticlesBg } from "particles-bg-vue";
Vue.use(ParticlesBg)


export default Vue.extend({
  name: 'App',
  components: {
  
  Navbar,
  Footer
  },
   

  data: () => ({
    
  }),
});
</script>
