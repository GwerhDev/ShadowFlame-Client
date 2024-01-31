import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import AuthPage from '../pages/AuthPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/auth/:token',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;