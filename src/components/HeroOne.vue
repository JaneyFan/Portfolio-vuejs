<template>
  <v-parallax
    lighten
    class="lighten-2 img-medium-emphasis align-center"
    max-height="740"                
    :aspect-ratio="1"
    src="../assets/hero.png"
    cover
  >
    <v-row class="mt-15 align-center justify-center">
      <v-col cols="12" sm="6" class="justify-center">          
          <h1 class="text-white ml-16 text-xs-h3 text-md-h2 text-lg-h1">Hello,</h1>          
          <h1 class="text-white mt-4 ml-16 text-xs-h3 text-md-h2 text-lg-h1">I am Jianming.</h1>
          <h4 class="text-white mt-14 ml-16 text-xs-h6 text-md-h5 text-lg-h4">Interaction Designer</h4>
          <h4 class="text-white mt-2 ml-16 text-xs-h6 text-md-h5 text-lg-h4">UX/UI Designer</h4>
      </v-col>       
      <v-col cols="12" sm="6" class="align-center hidden-sm-and-down">
      <v-img
        class="align-center"
        height="600"
        src="../assets/selfie.png"
      ></v-img>
        
      </v-col>


      </v-row> 
    </v-parallax>    

  
</template>

<script>
export default {
  }
</script>

<style lang="scss">



</style>