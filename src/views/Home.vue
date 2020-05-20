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
    for solving real world problems using science and technology, currently seeking my first 
    full time opportunity.  I have been coding in some form since high school but formally started
    to learn how to program in college where I learned languages such as Python, C, C++, Java, and Matlab.
    Within the last year, I graduated from the University of Minnesota Full Stack Web Development bootcamp.
    At my bootcamp, I learned relevant Web Development technologies such as HTML, CSS, Git, JavaScript, Firebase,
    Heroku, jQuery, Node, npm, React, RESTful APIs, MySQL, and MongoDb making numerous single page applications 
    and a few larger projects along the way.  After my bootcamp I took on a part time internship at a 
    cryptocurrency startup called DeFiner.  At my internship I got exposure to new tools such as SCSS, 
    Angular, and TypeScript.  Since my time with DeFiner ended I have gone on to learn more on my own.  
    For example, the portfolio you are looking at was designed from scratch in Vue.  Additionally, I went on 
    to relearn Python on Udemy and have even gone on to investigate Deno, (version 1.0) made by Ryan Dahl, 
    who created Node.  Now, I am very eagerly searching for my first full time development opportunity.      
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
