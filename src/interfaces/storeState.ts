import { ShadowWar } from "./shadowWar";

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
    shadowWarData: ShadowWar | null;
    shadowWarError: string | null;
  },
  layout: {
    tab: { value: string; label: string; };
  },
  admin: {
    users: any,
    tasks: any,
    clantasks: any,
    warbandtasks: any,
    notifications: any,
    members: any,
    clans: any,
  },
  userToken: string,
  currentCharacter: string | null,
  warbands: any,
}