import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useUserStore = create<UserState, [["zustand/persist", UserState]]>(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
			clearUser: () => set({ user: null }),
		}),
		{
			name: "user-storage",
		},
	),
);
