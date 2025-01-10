import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface ProgressChartProps {
  data: { value: number; timestamp: string }[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <LineChart
      data={{
        labels: data.map((entry) => new Date(entry.timestamp).toLocaleDateString()),
        datasets: [{ data: data.map((entry) => entry.value) }],
      }}
      width={Dimensions.get('window').width - 20}
      height={220}
      chartConfig={{
        backgroundColor: '#1E2923',
        backgroundGradientFrom: '#08130D',
        backgroundGradientTo: '#1F5F28',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
    />
  );
};

export default ProgressChart;
