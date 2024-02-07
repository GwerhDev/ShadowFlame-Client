import { defineStore } from 'pinia';
import { createTask, deleteUser, getTasks, getUserData, getUsers, signupInner, updateUser, updateUserData, deleteTask, updateTask, chatbotQuery } from '../services';
import { setUserToken } from '../../helpers';
import { API_URL } from '../misc/const';

interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    tasks: any,
  },
  userToken: string,
  users: any,
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {
      logged: false,
      userData: null,
      tasks: null
    },
    userToken: '',
    users: null
  }),

  actions: {
    logout() {
      localStorage.clear();
      this.currentUser = {
        logged: false,
        userData: null,
        tasks: {}
      };
      this.userToken = '';
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
      this.users = await getUsers();
    },

    async handleUpdateUser(id: string, formData: any) {
      await updateUser(id, formData);
    },

    async handleDeleteUser(id: string) {
      await deleteUser(id);
    },

    async handleGetTask(date: Date) {
      try {
        const response: any = await getTasks(date);
        this.currentUser.tasks = response;
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
  }
  
});