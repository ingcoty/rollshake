<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Inicio/>
    <br>
    <Carrusel/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Inicio from '@/components/Inicio.vue'
import Carrusel from '@/components/Carrusel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Inicio,
    Carrusel
  }
}
</script>
