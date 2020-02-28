<template>

  



  <div id="home">


    <br>
    <br>
    <br>

    <v-card
    class="mx-auto"
    max-width="1058">


    <v-card-text><p class="display-2 text--primary">Jasper Beachy</p>
    
    <p class="title text--secondary">Full Stack Web Developer</p>
    
    </v-card-text>
      
    <v-card-text >
    <p class="body-1">Growing up in Silicon Valley in Palo Alto, California and being the son of two Stanford University 
      researchers, I’ve been exposed to and have participated in computer programming and research from an early age.  
      This manifested itself into a passion for computer programming and the actual mechanics of computers.  
      To that end, I graduated from Gustavus Adolphus College majoring in Chemistry, minoring in Scandinavian studies 
      and having completed coursework in the C, C++, Python, Java, and Matlab programming languages.</p>
      <br>
    <p class="body-1">Since then, I have attended and completed a Full Stack Web Development Coding Bootcamp 
      at the University of Minnesota.  In this 6-month course, I completed coursework on various relevant 
      technologies including JavaScript, Node.js, MySQL, MongoDB, HTML, CSS and the React framework.  
      Since completing that Coding Bootcamp, I have continued to learn on my own working to master other technologies 
      like Ruby, SCSS, TypeScript and Angular.</p>
    <br>
    <p class="body-1">During my time at my Coding Bootcamp, I created a good number of SPAs 
      (Single Page Applications) as well as larger projects in Agile-like team settings.  
      My personal favorite was an application titled “Jamster”, which at its MVP is supposed to be a platform 
      for matching musicians with others in their area wishing to jam with each other.  This project used MySQL 
      (for authentication), Trello as the project board, React, React bootstrap, npm, Express, CSS, and was 
      deployed on Heroku.</p>
      <br>

    <p class="body-1">Most recently, I was a Frontend Developer intern at cryptocurrency startup, 
      DeFiner, where I worked on an Agile team, using Jira as our project board.  In this role, I further 
      developed my skillset with Angular in particular and began to work in a TDD 
      (Test Driven Development) environment using Jasmine and Karma.  Additionally, I further 
      built on my knowledge of JavaScript and Node by using TypeScript in conjunction with the Angular 
      front end framework.</p>
    <br>
    <p class="body-1">Since completing my most recent role at DeFiner, I have been searching for a full time role.
    If you wish to schedule a time to chat, please use the calendly link below or use the links below to shoot me
    an email or to connect on LinkedIn.</p>
      </v-card-text>   
    

    <v-card-actions>
      
       
    </v-card-actions>
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
