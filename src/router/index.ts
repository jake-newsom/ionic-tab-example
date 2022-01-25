import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue'
import FeedPage from "@/views/FeedPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        name: "Feed",
        component: () => FeedPage
      },
      {
        path: "feed/blog",
        name: "View Blog",
        component: () => import("@/views/ViewBlog.vue")
      },
      {
        path: "feed/script",
        name: "View Script",
        component: () => import("@/views/ViewScript.vue")
      }
    ]
  },
  {
    path: "/bigfeature/",
    name: "Big Feature",
    component: () => import("@/views/FeatureHome.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
