import { createRouter, createWebHistory } from "vue-router"
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', component: Layout },
    { path: '/login', component: Login }
  ]
})

export default router