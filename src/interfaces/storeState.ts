export interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    task: any,
    taskdate: any,
    tasktype: string,
  },
  admin: {
    users: any,
    tasks: any,
    clantasks: any,
    warbandtasks: any,
    notifications: any,
  },
  userToken: string,
}