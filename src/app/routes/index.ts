import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import SignupPage from '../pages/SignupPage.vue';
import AuthPage from '../pages/AuthPage.vue';
import HomePage from '../pages/HomePage.vue';
import AlreadyRegisteredPage from '../pages/AlreadyRegisteredPage.vue';
import RegisterSuccessPage from '../pages/RegisterSuccessPage.vue';
import RegisterErrorPage from '../pages/RegisterErrorPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/signup/already-registered',
    name: 'AlreadyRegisteredPage',
    component: AlreadyRegisteredPage
  },
  {
    path: '/signup/register-success',
    name: 'RegisterSuccessPage',
    component: RegisterSuccessPage
  },
  {
    path: '/signup/register-error',
    name: 'RegisterErrorPage',
    component: RegisterErrorPage
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