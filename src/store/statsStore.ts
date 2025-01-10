import { create } from 'zustand';

import { Stats } from '../types';

interface StatsState {
  stats: Stats;
  setStats: (newStats: Stats) => void;
  updateStat: (stat: keyof Stats, value: number) => void;
}

export const useStatsStore = create<StatsState>((set) => ({
  stats: {
    strength: 0,
    dexterity: 0,
    stamina: 0,
    intelligence: 0,
    wisdom: 0,
    creativity: 0,
    charisma: 0,
    empathy: 0,
    courage: 0,
    discipline: 0,
  },
  setStats: (newStats) => set({ stats: newStats }),
  updateStat: (stat, value) =>
    set((state) => ({
      stats: {
        ...state.stats,
        [stat]: state.stats[stat] + value,
      },
    })),
}));
