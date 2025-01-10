import { supabase } from '~/lib/supabase';

export const fetchStats = async (userId: string): Promise<Record<string, number> | null> => {
  const { data, error } = await supabase
    .from('stat_progress')
    .select('stat, value')
    .eq('user_id', userId);

  if (error) {
    console.error(error);
    return null;
  }

  // Aggregate data manually
  const aggregatedData = data.reduce(
    (acc: Record<string, number>, item: { stat: string; value: number }) => {
      if (!acc[item.stat]) {
        acc[item.stat] = 0;
      }
      acc[item.stat] += item.value;
      return acc;
    },
    {}
  );

  return aggregatedData;
};

export const saveStatUpdate = async (
  userId: string,
  stat: string,
  value: number
): Promise<void> => {
  const { error } = await supabase.from('stat_progress').insert([{ user_id: userId, stat, value }]);

  if (error) {
    console.error(error);
  }
};
