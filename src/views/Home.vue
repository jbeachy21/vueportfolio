<template>

  
  


  <div id="home">

     
    <br>
    <br>
    <br>

    <v-card class="mx-auto" max-width="1058" style="z-index:0; position:sticky">


    <v-card-text><p class="display-2 text--primary">Jasper Beachy</p>
    
    <p class="title text--secondary">Web Developer</p>
    
    </v-card-text>
      
    <v-card-text style=" 
  
  display: flex;
  justify-content: center;">
       <v-avatar class='shadow'
      tile
      color="blue"  style="border-radius:50%;width:100px;max-width: 200px;height: ;"
    ><v-img src='../assets/20190312_171808.jpg'></v-img>
       
        <!-- height='200px' width='200px' -->
     
    </v-avatar></v-card-text> 

    <v-card-text >
    <p class="body-1">  
    My name is Jasper Beachy, an aspiring Web Developer with a passion 
    for solving real world problems using science and technology, currently seeking a 
    full time opportunity.  I have been coding since college where I learned languages such as Python, 
    C, C++, Java, and Matlab, while earning a B.A in Chemistry.  Last year, I graduated from the 
    University of Minnesota Full Stack Web Development bootcamp.
    There, I mastered relevant Web Development technologies and methodologies such as Git, JavaScript, Firebase,
    HTML, CSS, Agile workflow, Heroku, jQuery, Node, npm, React, RESTful APIs, MySQL, and MongoDb making numerous 
    single page applications and a few larger projects along the way.  After my bootcamp I was a part time intern 
    at a cryptocurrency startup called DeFiner, where I learned new tools such as SCSS, TypeScript and Angular. 
    Since then, I have gone on to learn more on my own. For example, my portfolio was made from scratch using Vue 
    and I have advanced my mastery of Python with a course from Udemy.  Currently, I am enrolled in a Data Science 
    bootcamp at the University of Minnesota and I am eager to learn, and gain as much experience in development as 
    I possibly can.      
    </p>
      <br>
    
      </v-card-text>   
    

    <v-card-actions>
      
       
    </v-card-actions>
    <v-row justify="space-around">
      
    <img src="../assets/originalcert.png" alt="Certificate image" >
    <img src="../assets/udemycert_original.jpg" alt="Certificate image">
     
    </v-row>
  </v-card>



    <vue-calendly url="https://calendly.com/jbeachy-1" :height="700" 
    style="margin-bottom:300px;z-index:0;position:sticky"></vue-calendly>
     


  </div>
</template>

<style lang="scss" scoped>


.shadow
{
  box-shadow: 0px 2px 16px 7px rgba(0,0,0,0.51);
-webkit-box-shadow: 0px 2px 16px 7px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 2px 16px 7px rgba(0,0,0,0.51);


}

</style>

<script lang="js">



export default {
  name: 'home',
  components: {
   
  },
  data: () => ({
    
  }),
}
</script>