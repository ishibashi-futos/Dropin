import { createRouter, createWebHistory } from 'vue-router'
import GuestHouseApp from '../views/GuestHouse/_App.vue'
import GuestHouseView from '../views/GuestHouse/GuestHouseView.vue'
import SpaceApp from '../views/Space/_App.vue'
import SpaceView from '../views/Space/Home.vue'
import NewsIndex from '../views/News/Index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/guest_house',
      name: 'GuestHouseApp',
      component:GuestHouseApp,
      children: [
        {
          path: '',
          name: 'GuestHouseHome',
          component: GuestHouseView,
        },
        {
          path: '/guest_house/news',
          name: 'GuestHouseNews',
          component: NewsIndex,
        },
        {
          path: '/guest_house/news/:id',
          component: () => import('../views/News/_id.vue'),
          props: true,
        },
      ]
    },
    {
      path: '/space',
      name: 'space',
      component: SpaceApp,
      children: [
        {
          path: '',
          name: 'SpaceHome',
          component: SpaceView,
        },
        {
          path: '/space/news',
          name: 'newsIndex',
          component: NewsIndex,
        },
        {
          path: '/space/news/:id',
          component: () => import('../views/News/_id.vue'),
          props: true,
        }
      ]
    },
  ]
})

export default router
