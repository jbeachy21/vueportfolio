<template>
  <v-app class="grey-lighten" style="background-image: assets/space.jpg">
    
    <Navbar></Navbar>
    
      
      
      
      <vue-particles color="#dedede"  :particlesNumber="150"
      :particleOpacity="1.5"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push" style=" margin-top:50px; margin-bottom:50px; position: fixed; left: 0; right: 0; z-index: 0;"></vue-particles>
     
      
      
    
      <vue-page-transition name="fade">
  <router-view />
</vue-page-transition>

     <Footer></Footer>
     

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
 
import VueParticles from 'vue-particles'
Vue.use(VueParticles)


 


import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)




export default Vue.extend({
  name: 'App',
  components: {
  VueParticles,
  VuePageTransition,
  Navbar,
  Footer
  },
   

  data: () => ({
    
  }),
});
</script>
