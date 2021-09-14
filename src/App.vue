<template>
  <v-app class="grey-lighten">
    
<!-- APOD link https://api.nasa.gov/planetary/apod?api_key=g7YDz5BJenZLjZ8Xph5SvJlfUfiKKTRhQo0LZefq -->



    
    
    <v-img src="./assets/space.jpg">
    <Navbar></Navbar>  
    
      <vue-particles color="#dedede" :particlesNumber="100"
        :particleOpacity="1.5"
        shapeType="circle"
        :particleSize="5"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="1.0"
        :linesDistance="150"
        :moveSpeed="7"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push" 
        style=" 
        position: absolute; 
        left: 0;
        right: 0;
        margin: auto
        
        height: 2200px;
        
        
        
       
        z-index: -1;"> 
        </vue-particles>
     
      
      
      
    
      <vue-page-transition name="fade">
  <router-view />
</vue-page-transition>

    </v-img>
   
     <Footer></Footer>
     

  </v-app>
</template>

<script lang="js">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import VueCalendly from "vue-calendly"
import VueParticles from "vue-particles";
import VuePageTransition from "vue-page-transition";


Vue.use(VueCalendly)
Vue.use(VueParticles);
Vue.use(VuePageTransition);

 
let link = "https://api.nasa.gov/planetary/apod?api_key=g7YDz5BJenZLjZ8Xph5SvJlfUfiKKTRhQo0LZefq";

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
