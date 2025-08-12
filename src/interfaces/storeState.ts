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
    publicNextBattleTab: string;
    layoutTab: string;
    shadowWarData: any;
    shadowWarError: string | null;
  },
  admin: {
    users: any,
    tasks: any,
    clantasks: any,
    warbandtasks: any,
    notifications: any,
    members: any,
  },
  userToken: string,
  currentCharacter: string | null,
  warbands: any,
}