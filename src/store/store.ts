import { create } from 'zustand';

export interface BearState {
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<BearState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
