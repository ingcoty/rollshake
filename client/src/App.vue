<template>
  <div id="app" >
    <div class="bg-image" id="fondo">
      <div>
        <div class="sidebar-buttons">
          <div id="nav">
            <router-link to="/"><button class="btn mx-2"><b>Home</b></button></router-link>
            <router-link to="/nosotros"><button class="btn mx-2"><b>Nosotros</b></button></router-link>
            <router-link to="/pedidos"><button class="btn mx-2"><b>Pedidos</b></button></router-link>
            <router-link to="/cocina"><button class="btn mx-2"><b>Cocina</b></button></router-link>
            <router-link to="/contacto"><button class="btn mx-2"><b>Contactenos</b></button></router-link>
          </div>
        </div>
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
  font-size: 48;

  a {
    font-weight: bold;
    color: #2c3e50;
    //color: #e1eaf3;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#fondo {
      background-image: url('./images/hero-bg.jpg');
      height: 1204px;
}
.sidebar {
  grid-area: 2 / 1 / 6 / 2;
  background-color: rgb(233, 177, 177);
}
.sidebar-buttons button {
  background-color: rgb(183, 224, 200);
  border-radius: 12px;
  width: 15%;
  height: 7vh;
}
.sidebar-buttons button:hover {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
