<template>
  
  <div id="portfolio">
   
  <v-container>
    <v-row >


      <!-- 1 -->
      <v-col>
      
    <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/giftastic.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Giftastic</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://jbeachy21.github.io/Giftastic/index.html" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/Giftastic" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show1 = !show1">

        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show1">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>This project uses the Giphy API to display GIFs pretaining to name of the button clicked. 
          Additional buttons can also be added and then used to display GIFs.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    </v-col>

    


    





 <!-- 2 -->
     <v-col>
    <v-card
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src="../assets/crystal2.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Crystal Collector</v-card-subtitle>
  
       
  
      <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://jbeachy21.github.io/jbeachy21.github.io/CrystalCollector/CrystalCollector.html"
        >
          Site
        </v-btn>
  
        <v-btn
          color="Purple" fab
          text href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/CrystalCollector"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


         <v-btn
        icon
        @click="show2 = !show2">

        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
       </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>This project uses the Giphy API to display GIFs pretaining to name of the button clicked. 
          Additional buttons can also be added and then used to display GIFs.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
     
    </v-card>
  
    </v-col> 
    </v-row>

  </v-container>

<!-- Second row -->

<v-container>
    <v-row >


      <!-- 3 -->
      <v-col>
      
    <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/giftastic.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Giftastic</v-card-subtitle>
  
      <v-card-text class="text--primary">
        
  
        <p>This project uses the Giphy API to display GIFs pretaining to name of the button clicked. 
          Additional buttons can also be added and then used to display GIFs.</p>
      </v-card-text>
  
      <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://jbeachy21.github.io/Giftastic/index.html" target="_blank">
          Site
        </v-btn>
  
        <v-btn fab 
          color="Purple"
          text
          href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/Giftastic" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    


    





 
    <v-col>
    <v-card
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src="../assets/crystal2.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Crystal Collector</v-card-subtitle>
  
      <v-card-text class="text--primary">
        
  
        <p>This project makes use of the data attribute to randomly assign integer values in a 
        range to 4 buttons. The goal is to click these buttons to perfectly reach the score goal to win the game.</p>
      </v-card-text>
  
      <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://jbeachy21.github.io/jbeachy21.github.io/CrystalCollector/CrystalCollector.html"
        >
          Site
        </v-btn>
  
        <v-btn
          color="Purple"
          text href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/CrystalCollector"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-col>
  
    </v-row>

    <br>
    <br>
    <br><br><br>




  


  </v-container>


  </div>


  
</template>

<script>
// @ is an alias to /src


export default {
  data: () => ({
      show1: false,
      show2: false
    }),
  name: 'portfolio',
  components: {
    
    
  }
  
}
</script>
