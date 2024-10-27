export interface User {
  id: string;
  name: string;
  avatar: string;
  coins: number;
  isHost: boolean;
}

export interface Gift {
  id: string;
  name: string;
  icon: string;
  cost: number;
}

export interface Room {
  id: string;
  name: string;
  host: User;
  participants: User[];
  isLive: boolean;
}