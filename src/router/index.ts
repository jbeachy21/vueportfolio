import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/Home.vue' ),
    // to change transition change page transition change here 
    // meta: {transition: 'fade'}
  },
  
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import( '../views/Portfolio.vue' )
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
