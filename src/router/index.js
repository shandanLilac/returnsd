import { createRouter, createWebHistory } from "vue-router"

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import ChatRoom from '@/views/ChatRoom/index.vue'
import Issue from '@/views/Issue/index.vue'
import ForHelp from '@/views/ForHelp/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '', component: Layout, children: [
        { path: '', component: Home },
        { path: 'chatroom/:id', component: ChatRoom },
        { path: 'issue/:id', component: Issue },
        { path: 'forhelp', component: ForHelp }
      ]
    },
    { path: '/login', component: Login }
  ]
})

export default router