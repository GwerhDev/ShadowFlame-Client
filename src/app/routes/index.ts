import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import AuthPage from '../pages/AuthPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/auth/:token',
    name: 'AuthPage',
    component: AuthPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;