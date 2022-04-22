<template>
<v-container fluid class="bg-pink-lighten-5">
  <v-row justify="center" class="my-n1">

    <!--main card start -->   
    <v-col
     cols="12"     
     >
     <v-row class="d-flex justify-center"> 
         <v-col cols="6" class="justify-center align-center">
          <v-img
         src="../assets/btn.png"
         height="75"
         class="text-whtie justify-center align-center mt-4">
         <h5 class="d-flex justify-center align-center text-white text-xs-h5 text-md-h4 text-lg-h3">My projects</h5>
         </v-img>
         </v-col>
       </v-row>
       <v-container>
       <v-row class="d-flex justify-start mt-5">
         
         <v-col cols="12" sm="6" md="4" class="mb-4" v-for="project in projects" :key="project">
          <v-card outlined tile class="text-xs-center mx-4">
            
              <v-img :src="project.projectURL" height="505">
              </v-img>
            <v-card-title class="mt-5">{{project.projectTitle}}</v-card-title>
            <v-card-text class="py-0">{{project.projectDescription}}</v-card-text>
            <v-card-text class="py-0">{{project.projectCategory}}</v-card-text>
            <v-btn class="ml-4 my-4" color="bg-cyan-lighten-5">Read more</v-btn>
          </v-card>
          
          </v-col>
          
      </v-row> 
      </v-container>
    </v-col>  
  </v-row>
</v-container>
</template>



<script>


export default {
  data(){
    return {
      projects: [
    {
      projectID: 1,
      projectTitle: "Project One",
      projectDescription: "Marathon poster",
      projectURL: require("../assets/marathon poster.jpg"),
      projectCategory: "Poster"
    },
    {
      projectID: 2,
      projectTitle: "Project Two",
      projectDescription: "Halloween poster",
      projectURL: require("../assets/Halloween.jpg"),
      projectCategory: "Poster"
    },
    {
      projectID: 3,  
      projectTitle: "Project Three",
      projectDescription: "Trapholt poster",
      projectURL: require("../assets/Trapholt poster.jpg"),
      projectCategory: "Poster"    
    },
    {
      projectID: 4,
      projectTitle: "Project Four",
      projectDescription: "Trapholt trifold",
      projectURL: require("../assets/Trapholt trifold front.jpg"),
      projectCategory: "Trifold"    
    }, 
    {
      projectID: 5,
      projectTitle: "Project Five",
      projectDescription: "Trapholt website",
      projectURL: require("../assets/trapholt website.jpg"),
      projectCategory: "Web - https://trapperholt.one/"    
    },
    {
      projectID: 6,
      projectTitle: "Project Six",
      projectDescription: "Promo commercial for facebook",
      projectURL: require("../assets/drink.jpg"),
      projectCategory: "Video"
    }

  ]
}  
}
}
</script>