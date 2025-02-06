import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThePizza from '@/views/ThePizza.vue'
import IngredientsList from '@/views/IngredientsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ThePizza,
    },
    {
      path: '/',
      name: 'side',
      component: IngredientsList,
    },
  ],
})

export default router
