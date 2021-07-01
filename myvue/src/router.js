import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './todolist/A.vue'
import B from './todolist/B.vue'
import C from './todolist/C.vue'
import D from './todolist/D.vue'
import Shop from './text/Shop.vue'
import Cha from './text/Cha.vue'
import Center from './text/Center.vue'
import Foot from './text/Foot.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/A',
      name: 'A',
      component: A
    },
    {
      path: '/B',
      name: 'B',
      component: B
    },
    {
      path: '/C',
      name: 'C',
      component: C
    },
    {
      path: '/D',
      name: 'D',
      component: D
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Cha',
      name: 'Cha',
      component: Cha
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center
    },
    {
      path: '/Foot',
      name: 'Foot',
      component: Foot
    },
  ]
})
