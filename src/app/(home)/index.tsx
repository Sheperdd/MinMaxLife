import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { useStatsStore } from '~/store/statsStore';
import { Stats } from '~/types';

export default function MainMenu() {
  const { stats } = useStatsStore();

  // const [goal, setGoal] = useState('');
  // const [feedback, setFeedback] = useState('');

  // // Dummy function to simulate AI response
  // const handleGoalSubmit = () => {
  //   const updatedStats = { ...stats };
  //   if (goal.toLowerCase().includes('gym')) {
  //     updatedStats.strength += 2;
  //     setFeedback('Gym-related goal detected: +2 Strength!');
  //   } else if (goal.toLowerCase().includes('read')) {
  //     updatedStats.intelligence += 2;
  //     setFeedback('Reading goal detected: +2 Intelligence!');
  //   } else {
  //     setFeedback('Goal not recognized, no stats updated.');
  //   }
  //   setStats(updatedStats);
  //   setGoal(''); // Clear input
  // };

  const MAX_STAT = 100;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>RPG Stats</Text>
      <View style={styles.statsContainer}>
        {(Object.keys(stats) as (keyof Stats)[]).map((stat) => (
          <TouchableOpacity
            key={stat}
            style={styles.stat}
            onPress={() => console.log('Stat pressed')}>
            <Text style={styles.statName}>{stat.toUpperCase()}</Text>
            <ProgressBar progress={stats[stat] / MAX_STAT} style={styles.progressBar} />
            <Text>{stats[stat]}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  statsContainer: {
    marginBottom: 20,
  },
  stat: {
    marginBottom: 10,
  },
  statName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  feedback: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});
