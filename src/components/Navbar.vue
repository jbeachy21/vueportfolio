<template>
   
  
    <nav>
        <v-toolbar flat app color="light-blue" >
        

        <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" to="/" color="blue"><v-icon>mdi-home</v-icon></v-btn>
      </template>
      <span>Home</span>
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
    data: () => ({
       
    }),
}
</script>