<template>

   
   <Slide :crossIcon="false" width=200>
  
     

      

    <v-btn id="home" active-class="no-active" rounded v-ripple="{class: 'primary--text'}" extra large to="/" style="padding-left: 0; padding-right: 0;"> 
    <span class="ripple" style="color:#195190FF;"><i class="fas fa-home"> Home</i></span></v-btn>

    
    <br>


    <v-btn id="portfolio" active-class="no-active" rounded v-ripple="{class: 'primary--text'}" to ="/portfolio" extra large style="padding-left: 0; padding-right: 0;">
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
    // transition: background-color 400ms linear;
    
    transition: all 0.4s ease-in-out;

    // transition: box-shadow 250ms linear;
    
   }


  a#home:hover, a#portfolio:hover {
    animation-name: my-animation;
    animation-duration: 400ms;
    background-color: #FDD20EFF;
    animation-fill-mode: forwards;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
     
    //  #2BAE66FF royal green, #F93822FF bright red, #FDD20EFF yellow, #FFD662FF aspen gold, 
  }
  // @keyframes my-animation {
  //   0%   {box-shadow: 0px 0px 0px grey}
  //   20%  {box-shadow: 2px 2px 1px grey}
  //   40%  {box-shadow: 4px 4px 2px grey}
  //   60% {box-shadow: 6px 6px 3px grey}
  //   80% {box-shadow: 8px 8px 4px grey}
  //   100% {box-shadow: 10px 10px 5px grey}
           
  // }

   
  
  

  // box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

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