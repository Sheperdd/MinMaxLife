import { supabase } from '~/lib/supabase';

export const fetchStats = async (userId: string): Promise<Record<string, number> | null> => {
  const { data, error } = await supabase
    .from('stats_progress')
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
  const { error } = await supabase
    .from('stats_progress')
    .insert([{ user_id: userId, stat, value }]);

  if (error) {
    console.error(error);
  }
};

export const fetchStatHistory = async (
  userId: string,
  stat: string
): Promise<{ value: number; timestamp: string }[]> => {
  const { data, error } = await supabase
    .from('stats_progress')
    .select('value, timestamp')
    .eq('user_id', userId)
    .eq('stat', stat)
    .order('timestamp', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};
