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
import ShadowWarManagement from '../components/admin/ShadowWarManagement/ShadowWar.vue';
import HistoryManagement from '../components/admin/HistoryManagement/HistoryManagement.vue';
import MemberManagement from '../components/admin/MemberManagement/MemberManagement.vue';
import UserManagement from '../components/admin/UserManagement/UserManagement.vue';
import EnemyClanManagement from '../components/admin/EnemyClanManagement/EnemyClanManagement.vue';
import RequirementsPage from '../pages/RequirementsPage.vue';
import PublicShadowWarPage from '../pages/PublicShadowWarPage.vue';
import ExaltedShadowWar from '../components/ShadowWar/ExaltedShadowWar.vue';
import EminentShadowWar from '../components/ShadowWar/EminentShadowWar.vue';
import FamedShadowWar from '../components/ShadowWar/FamedShadowWar.vue';
import ProudShadowWar from '../components/ShadowWar/ProudShadowWar.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/shadow-war',
    name: 'PublicShadowWar',
    component: PublicShadowWarPage,
    children: [
      {
        path: 'exalted',
        name: 'PublicShadowWarExalted',
        component: ExaltedShadowWar,
      },
      {
        path: 'eminent',
        name: 'PublicShadowWarEminent',
        component: EminentShadowWar,
      },
      {
        path: 'famed',
        name: 'PublicShadowWarFamed',
        component: FamedShadowWar,
      },
      {
        path: 'proud',
        name: 'PublicShadowWarProud',
        component: ProudShadowWar,
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'shadow-war',
        name: 'DashboardShadowWar',
        component: ShadowWarManagement,
      },
      {
        path: 'history',
        name: 'DashboardHistory',
        component: HistoryManagement,
      },
      {
        path: 'clans',
        name: 'DashboardClans',
        component: EnemyClanManagement,
      },
      {
        path: 'members',
        name: 'DashboardMembers',
        component: MemberManagement,
      },
      {
        path: 'users',
        name: 'DashboardUsers',
        component: UserManagement,
      },
    ],
  },
  {
    path: '/requirements',
    name: 'RequirementsPage',
    component: RequirementsPage
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
