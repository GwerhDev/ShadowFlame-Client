import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AuthPage from '../pages/AuthPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import LoginErrorPage from '../pages/LoginErrorPage.vue';
import UserPendingPage from '../pages/UserPendingPage.vue';
import UserInactivePage from '../pages/UserInactivePage.vue';
import UserNotFoundPage from '../pages/UserNotFoundPage.vue';
import RegisterErrorPage from '../pages/RegisterErrorPage.vue';
import RegisterSuccessPage from '../pages/RegisterSuccessPage.vue';
import AlreadyRegisteredPage from '../pages/AlreadyRegisteredPage.vue';
import TasksPage from '../pages/TasksPage.vue';
import GuidesPage from '../pages/GuidesPage.vue';
import GalleryPage from '../pages/GalleryPage.vue';
import SettingsPage from '../pages/user/SettingsPage.vue';
import DashboardPage from '../pages/admin/DashboardPage.vue';
import RequirementsPage from '../pages/RequirementsPage.vue';
import UserManagementPage from '../pages/admin/UserManagementPage.vue';
import MemberManagementPage from '../pages/admin/MemberManagementPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/requirements',
    name: 'RequirementsPage',
    component: RequirementsPage
  },
  {
    path: '/dashboard/user-management',
    name: 'UserManagementPage',
    component: UserManagementPage
  },
  {
    path: '/dashboard/member-management',
    name: 'MemberManagementPage',
    component: MemberManagementPage
  },
  {
    path: '/u/settings',
    name: 'SettingsPage',
    component: SettingsPage
  },
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
    path: '/login/user-not-found',
    name: 'UserNotFoundPage',
    component: UserNotFoundPage
  },
  {
    path: '/login/user-pending-approve',
    name: 'UserPendingPage',
    component: UserPendingPage
  },
  {
    path: '/login/user-inactive',
    name: 'UserInactivePage',
    component: UserInactivePage
  },
  {
    path: '/login/login-error',
    name: 'LoginErrorPage',
    component: LoginErrorPage
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
  {
    path: '/tasks',
    name: 'TasksPage',
    component: TasksPage
  },
  {
    path: '/guides',
    name: 'GuidesPage',
    component: GuidesPage
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: GalleryPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
