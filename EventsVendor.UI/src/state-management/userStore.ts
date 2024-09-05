// userStore.ts
import { create } from "zustand";

export interface User {
  email: string;
  id: string;
  token: string;
}

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
