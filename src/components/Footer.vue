<template>
    <v-toolbar dark padless absolute>
    <v-card flat tile class="indigo lighten-1 white--text text-center flex">
  

    <v-card-text>

        <v-btn fab class="mx-4" href="https://www.linkedin.com/in/jasperbeachy/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
        <v-btn fab class="mx-4"><v-icon>mdi-phone</v-icon></v-btn>
        <v-btn fab class="mx-4" href="https://github.com/jbeachy21" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
        <v-btn fab class="mx-4" href="https://www.dropbox.com/home/Resume%20stuff/WebDeveloper?preview=JasperBeachy.pdf" target="_blank"><v-icon>mdi-file-account-outline</v-icon></v-btn>
        <v-btn fab class="mx-4" href="mailto:jbeachy@gustavus.edu?Subject=Hello" target="_blank"><v-icon>mdi-email-outline</v-icon></v-btn>
        <v-btn fab class="mx-4" target="_blank" href="https://dev.to/jbeachy21"><v-icon>mdi-dev-to</v-icon></v-btn>

          
   

    </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Jasper Beachy</strong>
      </v-card-text>
    </v-card>
    </v-toolbar>
</template>


<script>
export default {
    data: () => ({
        icons: [{'fab fa-linkedin': 'https://www.linkedin.com/in/jasperbeachy/',},
        
        
        ]
    })
}
</script>