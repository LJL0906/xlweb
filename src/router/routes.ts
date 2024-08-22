import { RouteRecordRaw } from 'vue-router'

const homePage = () => import('@/pages/home/home-page.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: homePage,
    meta: {
      title: '首页',
    },
  },
]

export default routes
