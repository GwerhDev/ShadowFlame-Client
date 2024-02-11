import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import SignupPage from '../pages/SignupPage.vue';
import AuthPage from '../pages/AuthPage.vue';
import HomePage from '../pages/HomePage.vue';
import AlreadyRegisteredPage from '../pages/AlreadyRegisteredPage.vue';
import RegisterSuccessPage from '../pages/RegisterSuccessPage.vue';
import RegisterErrorPage from '../pages/RegisterErrorPage.vue';
import UserNotFoundPage from '../pages/UserNotFoundPage.vue';
import UserPendingPage from '../pages/UserPendingPage.vue';
import TasksPage from '../pages/TasksPage.vue';
import GuidesPage from '../pages/GuidesPage.vue';
import GalleryPage from '../pages/GalleryPage.vue';
import DashboardPage from '../pages/admin/DashboardPage.vue';
import UserManagementPage from '../pages/admin/UserManagementPage.vue';
import MyTasksManagementPage from '../pages/admin/MyTasksManagementPage.vue';
import ClanTasksManagementPage from '../pages/admin/ClanTasksManagementPage.vue';
import WarbandTasksManagementPage from '../pages/admin/WarbandTasksManagementPage.vue';
import UserInactivePage from '../pages/UserInactivePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/dashboard/user-management',
    name: 'UserManagementPage',
    component: UserManagementPage
  },
  {
    path: '/dashboard/my-tasks-management',
    name: 'MyTasksManagementPage',
    component: MyTasksManagementPage
  },
  {
    path: '/dashboard/clan-tasks-management',
    name: 'ClanTasksManagementPage',
    component: ClanTasksManagementPage
  },
  {
    path: '/dashboard/warband-tasks-management',
    name: 'WarbandTasksManagementPage',
    component: WarbandTasksManagementPage
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
  history: createWebHashHistory(),
  routes
});

export default router;