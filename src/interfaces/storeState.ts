export interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    mytasks: any,
  },
  userToken: string,
  users: any,
}