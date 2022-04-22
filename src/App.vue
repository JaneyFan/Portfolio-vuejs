<template>
  <v-app>    
      <NavigationComponent/>      
     <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>    
    <FooterComponent/>
  </v-app>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',

  components: {
    NavigationComponent,     
    FooterComponent,
  },

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
} 
</style> 