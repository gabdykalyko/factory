import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultItem from '../views/ResultItem.vue'
import Favorite from '../views/Favorite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:id',
      name: 'image',
      component: ResultItem,
      props: true,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
    },
  ]
})

export default router
