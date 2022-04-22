<template>
  <v-parallax
    lighten
    class="lighten-2 img-medium-emphasis align-center"
    max-height="630"                
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
        height="490"
        src="../assets/selfie.png"
      ></v-img>
      </v-col>
    </v-row> 
    <v-row class="hidden-sm-and-down">
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter" 
        @after-enter="afterEnter"      
      >
      <v-img
      src="../assets/ball.png"
      height="55">      
      </v-img>           
      </transition>
    </v-row>
    </v-parallax>    

  
</template>

<script>
import gsap from 'gsap'

export default {
  setup() {
    const beforeEnter = (el) => {
        console.log('before enter - set initial state')
        el.style.opacity = 0.5
        el.style.transform = 'translateX(-800px)'
      }
      const enter = (el, done) => {
        console.log('starting to enter - make transition')
        gsap.to(el, {
          opacity: 1,
          x: 700,
          duration: 5,
          rotation: 720,
          delay: 3 + el.dataset.index * 0.1, // add one for 3 sec delay before running through 
          ease: 'bounce.out',
          onComplete: done
         })
      }
      const afterEnter = () => {
        console.log('after enter')

      }

    return { beforeEnter, enter, afterEnter }
  }
}
</script>

<style lang="scss">



</style>


