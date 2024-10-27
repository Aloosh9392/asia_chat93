import { create } from 'zustand';
import { User, Gift, Room } from '../types';

interface Store {
  currentUser: User | null;
  currentRoom: Room | null;
  gifts: Gift[];
  setCurrentUser: (user: User) => void;
  setCurrentRoom: (room: Room) => void;
  sendGift: (giftId: string) => void;
}

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  coins: 1000,
  isHost: false,
};

const mockGifts: Gift[] = [
  { id: '1', name: 'Rose', icon: '🌹', cost: 50 },
  { id: '2', name: 'Crown', icon: '👑', cost: 100 },
  { id: '3', name: 'Diamond', icon: '💎', cost: 500 },
  { id: '4', name: 'Rocket', icon: '🚀', cost: 1000 },
];

export const useStore = create<Store>((set) => ({
  currentUser: mockUser,
  currentRoom: null,
  gifts: mockGifts,
  setCurrentUser: (user) => set({ currentUser: user }),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  sendGift: (giftId) => {
    set((state) => {
      if (!state.currentUser) return state;
      const gift = state.gifts.find((g) => g.id === giftId);
      if (!gift || state.currentUser.coins < gift.cost) return state;
      
      return {
        currentUser: {
          ...state.currentUser,
          coins: state.currentUser.coins - gift.cost,
        },
      };
    });
  },
}));