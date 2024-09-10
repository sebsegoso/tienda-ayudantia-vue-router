import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue')
    },
    {
      path: '/products/:productId',
      name: 'productDetail',
      component: () => import('@/views/ProductDetailView.vue')
    },
    {
      path: '/not-found',
      name: 'notFound',
      component: () => import('@/views/ErrorView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'Error', redirect: { name: 'notFound' } }
  ]
})

export default router
