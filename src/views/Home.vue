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
    I have had a passion for technology for as long as I can remember. 
    The very first time that I coded something from start to finish was in middle
    school when I was about 13. I was enrolled in a web design course and I had just 
    finished our end of semester project. To this day I don’t remember many times that 
    I was on the same plane of happiness. It was a magical feeling. These days however, 
    I code more challenging web applications than one that details my favorite things about 
    the last trip to Sweden my parents took me and my brother on. Although it still brings me 
    a profound amount of joy. Whether I am making my first API program to shows gifs of all my 
    favorite movies 25 at a time, parsing data to display UFO and bigfoot sightings on a leaflet 
    map, or investigating a new Raspberry Pi project idea, it is always good old-fashioned fun.</p>
      <br>
    <p>Currently, I am focused on diving deeper into the software development world and seeing where the rabbit hole will take me. 
    If you have any interesting projects you would like to reach out to me about, do not hesitate to do so.</p>
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