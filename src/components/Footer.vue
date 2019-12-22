<template>
    <v-footer padless flat tile fluid absolute class="indigo" style="margin: 0px; padding: 0px; width: 100%;">
    
  
      <v-card class="indigo text-center" style="width: 100%;" align-center>
    
        <v-card-text>

        <!-- Linked In -->
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-btn dark  class="mx-4" href="https://www.linkedin.com/in/jasperbeachy/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
            </v-btn>
          </template>
          <span>Linked In</span>
        </v-tooltip>
          
        


       



        <!-- Phone -->


        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon>
            <v-btn dark class="mx-4" v-on="on" @click="dialog = !dialog"><v-icon>mdi-phone</v-icon></v-btn>
          </v-btn>
           </template>
          <span>(650) 384-9045</span>
         </v-tooltip>
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            
            <v-card-text class="text-center"><a href="tel:+6503849045" style="font-size:22px; font-weight: 300px;">(650) 384-9045</a></v-card-text>
            <v-card-text class="text-center"><a href="mailto:jbeachy@gustavus.edu?Subject=Hello" target="_blank" style="font-size:22px; font-weight: 300px;">jbeachy@gustavus.edu</a></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text class="text-center"><v-btn text @click="dialog = false" class="text-center"><v-icon>mdi-close</v-icon></v-btn></v-card-text>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Github -->

        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-btn dark  class="mx-4" href="https://github.com/jbeachy21" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
            </v-btn>
          </template>
          <span>Github</span>
        </v-tooltip>


        
        <!-- Resume -->
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-btn dark  class="mx-4" href=".././assets/JasperBeachy.txt" target="_blank"><v-icon>mdi-file-account-outline</v-icon></v-btn>
            </v-btn>
          </template>
          <span>Resume</span>
        </v-tooltip>



        <!-- Email -->
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-btn dark  class="mx-4" href="mailto:jbeachy@gustavus.edu?Subject=Hello" target="_blank"><v-icon>mdi-email-outline</v-icon></v-btn>
            </v-btn>
          </template>
          <span>Email</span>
        </v-tooltip>
        




        <!-- Dev -->

        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-btn dark  class="mx-4" target="_blank" href="https://dev.to/jbeachy21"><v-icon>mdi-dev-to</v-icon></v-btn>
            </v-btn>
          </template>
          <span>Dev</span>
        </v-tooltip>
        

        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">Jasper Beachy - {{ new Date().getFullYear() }} | <strong>Powered by Vue</strong></v-card-text>
        
          
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