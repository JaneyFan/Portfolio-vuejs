<template>
<v-app
  id="home">
  <HeroOne/>  
  <AboutComponent/> 
  <ProjectComponent/>
</v-app> 
</template>

<script>
import HeroOne from '@/components/HeroOne.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'

export default {
    name: 'HomeView', 
    components: { 
      HeroOne, 
      AboutComponent,
      ProjectComponent
    }
};
</script>

<style>

</style>