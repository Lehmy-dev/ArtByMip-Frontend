import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/GalleryView.vue')
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import(/* webpackChunkName: "about" */ '../views/ImpressView.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
