import FontAwesome from 'react-native-vector-icons/FontAwesome';

export type IconType = 'index' | 'goals' | 'settings';

export const icon = {
  index: (props: any) => <FontAwesome name="home" size={24} {...props} />,
  goals: (props: any) => <FontAwesome name="list-alt" size={24} {...props} />,
  settings: (props: any) => <FontAwesome name="gear" size={24} {...props} />,
};
