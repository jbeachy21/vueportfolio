<template>

   
   <Slide :crossIcon="false" width=200>
  
     

      

    <v-btn id="home" active-class="no-active" rounded class="elevation-10" v-ripple="{class: 'primary--text'}" extra large to="/" style="padding-left: 0; padding-right: 0;"> 
    <span class="ripple" style="color:#195190FF;"><i class="fas fa-home"> Home</i></span></v-btn>

    
    <br>


    <v-btn id="portfolio" active-class="no-active" rounded class="elevation-10" v-ripple="{class: 'primary--text'}" to ="/portfolio" extra large style="padding-left: 0; padding-right: 0;">
    <span class="ripple" style="color: #195190FF;"><i class="fas fa-file-code"> Portfolio</i></span></v-btn>
    
      
     

   </Slide>
  
</template>



<style lang="scss">
  /* Basic styles */
  div.bm-menu {
    background-color: #195190FF;
  }

  .v-btn--active.no-active::before {                                                                             
  opacity: 0 !important;
}


  nav.bm-item-list {
    background-color: #195190FF;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: auto;
  }

  a#home, a#portfolio {
    transition: background-color 400ms linear;
  }

  a#home:hover, a#portfolio:hover {
    background-color: #2BAE66FF;
    // #2BAE66FF royal green, #F93822FF bright red, #FDD20EFF yellow, #FFD662FF aspen gold, 
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