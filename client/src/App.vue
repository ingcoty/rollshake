<template>
  <v-app>
    <Header/>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
<!-- /*<div id="nav">
  <router-link  to="/">Home</router-link>|
  <router-link to="/about">About</router-link>|
  <router-link to="/nosotros">Nosotros</router-link>|
  <router-link to="/section">Section</router-link>|
  <router-link to="/pedido">Pedido</router-link>|
</div>/ -->
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
      Header,
      
    },

  data: () => ({
    //
  }),
};

</script>
