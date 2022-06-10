<template>
  <div class="page main-page">
    <Hero />
    <MyServices />
    <Projects />
    <Aboutme />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import MyServices from './MyServices.vue'
import Projects from './Projects.vue'
import Aboutme from './Aboutme.vue'
export default {
  name: 'IndexPage',
  components: { Hero, MyServices, Projects, Aboutme },
}
</script>
