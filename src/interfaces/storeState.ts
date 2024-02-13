export interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    mytasks: any,
    clantasks: any,
    warbandtasks: any,
    tasksdate: any,
  },
  admin: {
    users: any,
    mytasks: any,
    clantasks: any,
    warbandtasks: any,
    notifications: any,
  },
  userToken: string,
}