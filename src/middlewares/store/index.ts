import { defineStore } from 'pinia';
import { createTask, deleteUser, getTasks, getUserData, getUsers, signupInner, updateUser, updateUserData, deleteTask, updateTask, chatbotQuery, getAdminNotifications, createCompletedTask, deleteCompletedTask } from '../services';
import { setUserToken } from '../../helpers';
import { API_URL } from '../misc/const';
import { storeState } from '../../interfaces/storeState';


export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {
      logged: false,
      userData: null,
      task: null,
      taskdate: null,
      completedTask: null,
    },

    admin: {
      users: null,
      tasks: null,
      clantasks: null,
      warbandtasks: null,
      notifications: null,
    },

    userToken: '',
  }),

  actions: {
    logout() {
      localStorage.clear();
      this.currentUser = {
        logged: false,
        userData: null,
        task: null,
        taskdate: null,
        completedTask: null,
      };

      this.admin = {
        users: null,
        tasks: null,
        clantasks: null,
        warbandtasks: null,
        notifications: null,
      };

      this.userToken = '';
    },

    setTasksDate(date: any) {
      this.currentUser.taskdate = date;
    },

    async handleRegister(data: any) {
      const userToken = await signupInner(data);
      setUserToken(userToken);
      const url = '/account/settings/' + userToken;
      this.userToken = userToken;
      return url;
    },

    handleLogin() {
      const url: string = API_URL + '/login-bnet'
      return url;
    },

    async handleUserData(token: any) {
      try {
        this.currentUser = await getUserData(token);
        
        this.userToken = token;
        setUserToken(token);
      } catch (error) {
        console.error(error);
      }
    },

    async handleUpdateUserData(formData: any, id: any, token: any) {
      await updateUserData(formData, id, token);
      this.currentUser = await getUserData(token);
      this.userToken = token;
      setUserToken(token);
    },

    async handleGetUsers() {
      this.admin.users = await getUsers();
    },

    async handleUpdateUser(id: string, formData: any) {
      await updateUser(id, formData);
    },

    async handleDeleteUser(id: string) {
      await deleteUser(id);
    },

    async handleCreateCompletedTask (id: string, formData: any) {
      await createCompletedTask(id, formData);
    },

    async handleDeleteCompletedTask (id: string, formData: any) {
      await deleteCompletedTask(id, formData);
    },

    async handleGetTask(date: Date) {
      try {
        const response: any = await getTasks(date);
        this.currentUser.task = response;
        return;
      } catch (error) {
        console.error(error);
      }
    },

    async handleCreateTask(formData: any) {
      try {
        const response: any = await createTask(formData);
        return response;
      } catch (error) {
        console.error(error);
      }
    },

    async handleUpdateTask(id: string, formData: any) {
      try {
        const response: any = await updateTask(id, formData);
        return response;
      } catch (error) {
        console.error(error);
      }
    },

    async handleDeleteTask(id: string) {
      try {
        const response: any = await deleteTask(id);
        return response;
      } catch (error) {
        console.error(error);
      }
    },

    async handleChatbotQuery(formData: any) {
      try {
        const response: any = await chatbotQuery(formData);
        return response;
      } catch (error) {
        console.error(error);
      }
    },

    async handleGetAdminNotifications() {
      try {
        this.admin.notifications = await getAdminNotifications();
        return;
      } catch (error) {
        console.error(error);
      }
    },
  }

});