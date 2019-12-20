<template>
    <v-footer padless flat tile fluid absolute class="indigo" style="margin: 0px; padding: 0px; width: 100%;">
    
  
      <v-card class="indigo text-center" style="width: 100%;">
    
        <v-card-text>
        <v-btn dark fab class="mx-4" href="https://www.linkedin.com/in/jasperbeachy/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
        <v-btn dark fab class="mx-4"><v-icon>mdi-phone</v-icon></v-btn>
        <v-btn dark fab class="mx-4" href="https://github.com/jbeachy21" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
        <v-btn dark fab class="mx-4" href=".././assets/JasperBeachy.pdf"><v-icon>mdi-file-account-outline</v-icon></v-btn>
        <v-btn dark fab class="mx-4" href="mailto:jbeachy@gustavus.edu?Subject=Hello" target="_blank"><v-icon>mdi-email-outline</v-icon></v-btn>
        <v-btn dark fab class="mx-4" target="_blank" href="https://dev.to/jbeachy21"><v-icon>mdi-dev-to</v-icon></v-btn>

        </v-card-text>
      </v-card>

    
      

      
      
    
    </v-footer>
</template>


<script>
export default {
    data: () => ({
        icons: [{'fab fa-linkedin': 'https://www.linkedin.com/in/jasperbeachy/',},
        
        
        ]
    })
}
</script>