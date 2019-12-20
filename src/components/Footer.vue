<template>
    <v-footer padless flat tile fluid absolute class="indigo" style="margin: 0px; padding: 0px; width: 100%;">
    
  
      <v-card class="indigo text-center" style="width: 100%;">
    
        <v-card-text>


        <v-btn dark fab class="mx-4" href="https://www.linkedin.com/in/jasperbeachy/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>



      <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
      <v-btn dark fab class="mx-4" v-on="on"><v-icon>mdi-phone</v-icon></v-btn>
      </template>

      <v-card><v-card-text class="text-center" style="font-size:22px; font-weight: 300px;">(650)384-9045</v-card-text>
      <v-card-text class="text-center" style="font-size:22px; font-weight: 300px;"><a href="mailto:jbeachy@gustavus.edu?Subject=Hello" target="_blank">jbeachy@gustavus.edu</a></v-card-text>
      
      <v-card-actions><v-card-text class="text-center"><v-btn text @click="dialog = false"><v-icon class="text-center">mdi-close</v-icon>
      </v-btn></v-card-text></v-card-actions></v-card></v-dialog>





        <v-btn dark fab class="mx-4" href="https://github.com/jbeachy21" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
        <v-btn dark fab class="mx-4" href=".././assets/JasperBeachy.txt" target="_blank"><v-icon>mdi-file-account-outline</v-icon></v-btn>
        <v-btn dark fab class="mx-4" href="mailto:jbeachy@gustavus.edu?Subject=Hello" target="_blank"><v-icon>mdi-email-outline</v-icon></v-btn>
        <v-btn dark fab class="mx-4" target="_blank" href="https://dev.to/jbeachy21"><v-icon>mdi-dev-to</v-icon></v-btn>

        </v-card-text>
      </v-card>

    
      

      
      
    
    </v-footer>
</template>


<script>
export default {
    data () {
      return {
        dialog: false 
      }
        
        
    }}

</script>