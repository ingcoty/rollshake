import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
