<template>
  <div id="app">
    <div class="bg-image" id="fondo">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/nosotros">Nosotros</router-link> |
        <router-link to="/pedidos">Pedidos</router-link> |
        <router-link to="/contacto">Contactenos</router-link>
      </div>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dae0e7;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e1eaf3;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#fondo {
      background-image: url('./images/hero-bg.jpg');
      height: 1204px;
}
</style>
