import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;