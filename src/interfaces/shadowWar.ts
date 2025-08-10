export interface Member {
  _id: string;
  name: string;
  class?: string; // Assuming class is a string
  resonance?: number; // Assuming resonance is a number
  // Add other member properties if known
}

export interface Clan {
  _id: string;
  name: string;
  // Add other clan properties if known
}

export interface Match {
  group1: {
    member: Member[];
  };
  group2: {
    member: Member[];
  };
  result?: string; // Optional, as it's 'pending' initially
}

export interface ShadowWar {
  _id?: string; // Optional, as it might not exist for new wars
  date: Date;
  result: string;
  enemyClan: Clan;
  battle: {
    exalted: Match[];
    eminent: Match[];
    famed: Match[];
    proud: Match[];
  };
  confirmed: Member[];
}