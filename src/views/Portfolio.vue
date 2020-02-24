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
          text href="https://jbeachy21.github.io/jbeachy21.github.io/CrystalCollector/CrystalCollector.html" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn onMouseOver="this.style.color='#6e5494"
          color="Purple" fab
          text href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/CrystalCollector" target="_blank"
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
        
  
        <p>This project makes use of the data attribute to randomly assign integer values 
          in a range to 4 buttons. The goal is to click these buttons to perfectly 
          reach the score goal to win the game.</p>
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
        src=".././assets/train.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Train Scheduler</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://jbeachy21.github.io/Firebase/index.html" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/Firebase" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show3 = !show3">

        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show3">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>This project uses Firebase, to sync train schedule data. 
        Arrival times are calcuated using the JavaScript library, moment.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    
    </v-col>

    


    





  <!-- 4 -->

 
    <v-col>
    <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/friend.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Friend Finder</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://friendfinder1011.herokuapp.com/" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/FriendFinder" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show4 = !show4">

        <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show4">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>This project uses node and express to assign you a friend like in facebook based 
        on your answers to a survey.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    </v-col>
  
    </v-row>


<v-row>

  <!-- 5 -->

  <v-col>
    <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/beer.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Beer Reviews</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://jbeachy21.github.io/BeerReviews/index.html" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/BeerReviews" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show5 = !show5">

        <v-icon>{{ show5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show5">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>A Brewery review website for the numerous breweries in the state of MN. 
        It uses materialize, jQuery, and JavaScript.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    </v-col>


    <!-- 6 -->
  
     <v-col>
    <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/howsmydriving.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Hows My Driving</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://secure-mesa-64150.herokuapp.com/" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/HowsMyDriving" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show6 = !show6">

        <v-icon>{{ show6 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show6">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>The Yelp for reviewing how people drive. 
          This project uses node, express, bootstrap, and passport.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    </v-col>



</v-row>

<v-row>

  <!-- 7 -->
  <v-col>

     <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/clickygame.png"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Clicky Game</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://agile-fjord-96128.herokuapp.com/" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/clickygame" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show7 = !show7">

        <v-icon>{{ show7 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show7">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>My first project using react, a simple memory game, which after clicking 
          a card will shuffle and if any card is clicked twice will reset the score to 0.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    </v-col>


  <!-- 8 -->
  

  <v-col>

     <v-card 
      
      max-width="450" max-height="482"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        src=".././assets/jamster.jpg"
      >
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Jamster</v-card-subtitle>
  
      
  
        <v-card-actions>
        <v-btn fab
          color="blue"
          text href="https://betterjamster.herokuapp.com/" target="_blank"
        >
          Site
        </v-btn>
  
        <v-btn fab id="github2"
          color="Purple"
          text
          href="https://github.com/jbeachy21/Jamster" target="_blank"
        >
         <v-icon>mdi-github-circle</v-icon>
        </v-btn>


        <v-btn
        icon
        @click="show8 = !show8">

        <v-icon>{{ show8 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show8">
        <v-divider></v-divider>


 <v-card-text class="text--primary">
        
  
        <p>Jamster is a react application designed for musicians, with the intention of 
          matching them with other musicians who wish to jam. To start, create an account, 
          enter your email, password, and select your primary instrument and skill level.</p>
      </v-card-text>
      </div>
    </v-expand-transition>
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
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
    }),
  name: 'portfolio',
  components: {
    
    
  }
  
}
</script>
