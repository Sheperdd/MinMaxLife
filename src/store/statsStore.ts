import { create } from 'zustand';

interface StatsState {
  stats: Record<string, number>;
  setStats: (newStats: Record<string, number>) => void;
  updateStat: (stat: string, value: number) => void;
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
