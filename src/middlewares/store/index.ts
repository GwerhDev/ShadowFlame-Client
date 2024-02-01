import { defineStore } from 'pinia';
import { getUserData, getUsers, signupInner, updateUser } from '../services';
import { setUserToken } from '../../helpers';
import { API_URL } from '../misc/const';

interface storeState {
  currentUser: any,
  userToken: string,
  users: any
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {},
    userToken: '',
    users: {}
  }),

  actions: {
    logout() {
      localStorage.clear();
      this.currentUser = {};
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
    }
  }
  
});