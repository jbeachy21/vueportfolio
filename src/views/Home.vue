<template>
  <div id="home">


  

    

    <vue-calendly url="https://calendly.com/jbeachy-1" :height="700" style="margin-bottom:300px; position:sticky;"></vue-calendly>
    

  
  

 

  


  </div>
</template>



<script>



import Vue from 'vue'
import VueCalendly from 'vue-calendly';
Vue.use(VueCalendly);


export default {
  name: 'home',
  components: {
    
  }
}
</script>
