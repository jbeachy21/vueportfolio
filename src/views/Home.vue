<template>

  



  <div id="home">


    <br>
    <br>
    <br>

    <v-card class="mx-auto" max-width="1058">


    <v-card-text><p class="display-2 text--primary">Jasper Beachy</p>
    
    <p class="title text--secondary">Web Developer</p>
    
    </v-card-text>
      
    <v-card-text >
    <p class="body-1">  
    My name is Jasper Beachy, an aspiring Web Developer with a passion 
    for solving real world problems using science and technology, currently seeking a 
    full time opportunity.  I have been coding since college where I learned languages such as Python, 
    C, C++, Java, and Matlab. While earning a B.A in Chemistry.  Last year, I graduated from the 
    University of Minnesota Full Stack Web Development bootcamp.
    There, I mastered relevant Web Development technologies and methodologies such as Git, JavaScript, Firebase,
    HTML, CSS, Agile workflow, Heroku, jQuery, Node, npm, React, RESTful APIs, MySQL, and MongoDb making numerous 
    single page applications and a few larger projects along the way.  After my bootcamp I was a part time 
    intern at a cryptocurrency startup called DeFiner, where I learned new tools such as SCSS, TypeScript 
    and Angular.  Since then, I have gone on to learn more on my own.  
    For example, the portfolio you are looking at was designed from scratch in Vue.  Additionally, I have
    advanced my mastery of Python with a course from Udemy and am investigating Deno, (version 1.0) 
    made by Ryan Dahl, who created Node.  Now, I am eager to get started on a full time development opportunity.      
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
    style="margin-bottom:300px; position:relative;"></vue-calendly>
     


  </div>
</template>



<script lang="js">



export default {
  name: 'home',
  components: {
   
  },
  data: () => ({
    
  }),
}
</script>
