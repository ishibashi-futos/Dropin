import { createRouter, createWebHistory } from 'vue-router'
import GuestHouseView from '../views/GuestHouse/GuestHouseView.vue'
import GuestHouseApp from '../views/GuestHouse/_App.vue'
import NewsView from '../views/News/_App.vue'
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
          name: 'news',
          component: NewsView,
          children: [
            {
              path: '',
              name: 'newsIndex',
              component: NewsIndex
            },
            {
              path: ':id',
              component: () => import('../views/News/_id.vue'),
              props: true,
            }
          ]
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
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
