import { supabase } from '@/lib/supabase';

const CheckAndInitializeStats = async (userId: string) => {
  // Check if the user's stats are already initialized
  const { data, error } = await supabase.from('stats_progress').select('*').eq('user_id', userId);

  if (error) {
    console.error('Error checking stats:', error);
    return;
  }

  if (data.length === 0) {
    // If no stats exist, initialize them
    const initialStats = [
      { stat: 'strength', value: 10 },
      { stat: 'dexterity', value: 10 },
      { stat: 'stamina', value: 10 },
      { stat: 'intelligence', value: 10 },
      { stat: 'wisdom', value: 10 },
      { stat: 'creativity', value: 10 },
      { stat: 'charisma', value: 10 },
      { stat: 'empathy', value: 10 },
      { stat: 'courage', value: 10 },
      { stat: 'discipline', value: 10 },
    ];

    const { error: insertError } = await supabase
      .from('stats_progress')
      .insert(initialStats.map((stat) => ({ user_id: userId, ...stat })));

    if (insertError) {
      console.error('Error initializing stats:', insertError);
    } else {
      console.log('Stats initialized successfully!');
    }
  } else {
    console.log('Stats already exist for user:', userId);
  }
};

export default CheckAndInitializeStats;
