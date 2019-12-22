<template>
    <nav>
        
        <v-toolbar flat app dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        
        

        <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" to="/" color="blue"><v-icon>mdi-home</v-icon></v-btn>
      </template>
      <span>Home</span>
    </v-tooltip>




         


     <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" to="/contact" color="blue"><v-icon>mdi-phone</v-icon></v-btn>
      </template>
      <span>Contact</span>
    </v-tooltip>



         


         <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" to="/portfolio" color="blue"><v-icon>mdi-file</v-icon></v-btn>
      </template>
      <span>Portfolio</span>
    </v-tooltip>
        
        
        
        
        
        </v-toolbar>
    </nav>
</template>


<script>
export default {
    
}
</script>