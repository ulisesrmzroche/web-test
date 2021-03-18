import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Reservations from '../views/Reservations.vue'
import NewReservation from '../views/NewReservation.vue'
import NewInventory from '../views/NewInventory.vue'
import Inventories from '../views/Inventories.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'reservations',
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  },
  {
    path: '/reservations/new',
    name: 'NewReservation',
    component: NewReservation
  },
  {
    path: '/inventories',
    name: 'Inventories',
    component: Inventories
  },
  {
    path: '/inventories/new',
    name: 'NewInventory',
    component: NewInventory
  },
  {
    path: '/inventory',
    name: 'Inventory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Inventory.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
