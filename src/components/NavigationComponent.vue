<template>
  <nav>     
      <v-app-bar flat app dense class="bg-white"> 
      <!--   <v-img class="ml-3" 
        src="signature JM.svg" height="50">
        </v-img> -->
        <v-toolbar-title class="text-uppercase text-grey-darken-3">
         <span class="font-weight-bold">jm</span>
         <span class="font-weight-light">fan</span>  
         
        </v-toolbar-title>
        <v-spacer></v-spacer> 
        
        <!-- <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('project')">Project</v-btn>
        <v-btn text @click="scroll('about')">About</v-btn>
        <v-btn text @click="scroll('contact')">Contact</v-btn> 
        -->
        <v-toolbar-content v-for="link in links" :key="link.text" router :to="link.route" class="bg-white hidden-sm-and-down">
          <v-btn flat router :to="link.route">{{link.text}}</v-btn>
        </v-toolbar-content>
        
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" class="bg-white" position="right"> 
        <v-col class="text-right">
        <v-btn @click="drawer = false"
          class="ma-2 text-right"          
          icon
          dark
          plain
          position="right"
          >x
        </v-btn>
        </v-col>
        <v-list density="compact" nav v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item router :to="link.route">{{link.text}}</v-list-item> 
        </v-list>
        
      </v-navigation-drawer> 
  </nav>
</template>

<script>
export default {
   data() {
        return {
            drawer: false,
            links: [
              {text: 'Home', route: '/'},
              {text: 'Project', route: '/project'},
              {text: 'About', route: '/about'},
              {text: 'Contact', route: '/contact'},

            ]
        }
    }, 

    /* methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, */
};
</script>

<style scoped>


</style>