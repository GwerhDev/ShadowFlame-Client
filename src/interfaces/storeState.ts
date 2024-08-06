export interface storeState {
  currentUser: {
    logged: boolean,
    userData: any,
    task: any,
    taskdate: any,
    tasktype: string,
    taskloading: boolean,
    guidetype: string,
    chatbotmodel: string,
  },
  admin: {
    users: any,
    tasks: any,
    clantasks: any,
    warbandtasks: any,
    notifications: any,
  },
  userToken: string,
  currentCharacter: string,
  warbands: any,
}