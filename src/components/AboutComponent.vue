<template>
<v-container fluid class="bg-cyan-lighten-5">
     <!--main card start -->   
      <v-card 
       class="bg-white mx-16 my-16"       
       flat    
      >
       <v-row class="d-flex justify-center"> 
         <v-col cols="8" class="justify-center">
          <v-img
         src="../assets/btn.png"
         height="75"
         class="text-whtie justify-center align-center mt-4">
         <h5 class="d-flex align-center justify-center text-white text-xs-h5 text-md-h4 text-lg-h3">About me</h5>
         </v-img>
         </v-col>
       </v-row>

   <!--my resume start -->      
   <v-list-item three-line> 
     <v-list-item-header>
       <v-list-item-title class="text-xs-h6 text-md-h5 text-lg-h5 mx-10 mt-8 mb-3 text-purple-darken-3">
         My resume
       </v-list-item-title>
       <v-divider color="purple-darken-3" class="mx-10 mb-3"></v-divider>
         <h4 class="mx-10 mt-6 text-blue-grey-darken-3 text-xs-h6">I'm an interaction designer and now based in Denmark. </h4>
         <h4 class="mx-10 mb-5 text-blue-grey-darken-3">I like to resolve design problems, create smart user interface and imagine useful interaction, focusing on the user-centered design.</h4>
          <v-list-item class="ml-6">          
          <v-btn color="purple-darken-3"
          href="CV.pdf"
          download
          >download</v-btn>
         </v-list-item>
     </v-list-item-header> 
   </v-list-item>

   <!--my video cv start -->
   <v-list-item>
     <v-list-item-header>
       <v-list-item-title class="text-xs-h6 text-md-h5 mx-10 mt-6 mb-3 text-teal-darken-4"> 
         My video CV
       </v-list-item-title>
       <v-divider color="teal-darken-4" class="mx-10 mb-3"></v-divider>

             
      <!--video start -->
      <v-col cols="auto" class="ml-6">
      <v-dialog
        transition="dialog-top-transition"
        
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="teal-darken-4"
            v-bind="props"
          >Watch video</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            
            <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" width="640" height="390"
    src="https://www.youtube.com/embed/vwiA3GiYz0s" allowfullscreen>
    </iframe>
            </div>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>  
     </v-list-item-header>
   </v-list-item>

   <!--my business card start -->
   <v-list-item class="justify-center align-center">
     <v-list-item-header>
       <v-list-item-title class="text-xs-h6 text-md-h5 mx-10 mt-6 mb-3 text-orange-darken-4">
         My business card
       </v-list-item-title>
       <v-divider color="orange-darken-4" class="mx-10 mb-8"></v-divider>
       <v-row>
        <v-col cols="12" md="6" lg="3">
        <v-img src="../assets/businesscard.jpg"
          max-height="250"          
          aspect-ratio="1"
          >          
          </v-img>
        
       <v-list-item class="ml-6 mt-3">           
          <v-btn           
          color="orange-darken-4"                   
          href="business-card.pdf"
          download
          >download
          </v-btn>         
       </v-list-item>       
       </v-col> 
      </v-row>
     </v-list-item-header>     
   </v-list-item>
    
  
  </v-card> 
 
</v-container>
</template>


<script>



export default {
  
  }
</script>

  
