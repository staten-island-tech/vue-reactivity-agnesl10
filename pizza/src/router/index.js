import { createRouter, createWebHistory } from 'vue-router'
import ThePizza from '@/views/ThePizza.vue'
import IngredientsList from '@/components/IngredientsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ThePizza,
    },
  ],
})

export default router
