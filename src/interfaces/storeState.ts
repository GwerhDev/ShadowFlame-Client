export interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    tasks: any,
  },
  userToken: string,
  users: any,
}