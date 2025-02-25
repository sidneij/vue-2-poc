import HomePage from '@/pages/Home.page.vue'
import Vue3Page from '@/pages/Vue3.page.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/vue-3',
    component: Vue3Page
  }
]

export default routes