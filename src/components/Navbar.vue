<template>

   
   <Slide :crossIcon="false" width=200>
  
     

      

    <a id="home" href="/" v-wave="{duration:2.0,cancellationPeriod:25}" width=200> 
    <span class="ripple"><i class="fas fa-home"> Home</i></span></a>

    <a id="portfolio" href="/portfolio" v-wave="{duration:2.0,cancellationPeriod:25}" width=200>
    <span class="ripple"><i class="fas fa-file-code"></i> Portfolio</span></a>
       

   </Slide>
  
</template>

  









<style lang="scss">
  /* Basic styles */
  .bm-item-list {
    margin: 0 0 0 0;
  }
  div.bm-menu {
    background-color: #195190FF;
  }
  nav {
    margin: 0 0 0 0;
  }
  .bm-item-list {
    margin-left: 0px
  }
  a#home:hover, a#portfolio:hover 
  {
     
    background-color: #A2A2A1FF;
  }
  .bm-cross, .bm-cross:hover, .bm-cross:active {
      background: #A2A2A1FF;
  }
  ::selection {
    background-color: #b3d4fc;
    color: #A2A2A1FF;
    text-shadow: none;
}


 
</style>
<script>
  import { Slide } from 'vue-burger-menu' 

export default {
    components: {
        Slide // Register your component
    },
    data: () => ({
      
        
      
    }),
    
    

    
}
</script>