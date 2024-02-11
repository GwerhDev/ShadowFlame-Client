export interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    mytasks: any,
    clantasks: any,
    warbandtasks: any,
  },
  admin: {
    users: any,
    mytasks: any,
    clantasks: any,
    warbandtasks: any,
  },
  userToken: string,
}