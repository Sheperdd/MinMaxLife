import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ViewStyle, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { BottomFabBar } from 'rn-wave-bottom-bar';

import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

const tabBarIcon = (name: string) => {
  // Define your tabBarIcon function here
  return () => <Icon name={name} size={24} color="black" />;
};

const generateScreen = (name: string) => {
  // Define your generateScreen function here
  return () => (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const SettingsScreen = () => {
  // Define your SettingsScreen component here
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const Layout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5F0B65',
        tabBarActiveBackgroundColor: '#5F0B65',
        tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={(props) => (
        <BottomFabBar
          mode="default"
          isRtl={false}
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          bottomBarContainerStyle={
            {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            } as ViewStyle
          }
          {...props}
        />
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('aliwangwang-o1'),
        }}
        name="Home"
        component={generateScreen('Home')}
      />
      <Tab.Screen
        name="Meh"
        options={{ tabBarIcon: tabBarIcon('meh') }}
        component={generateScreen('Meh')}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('rocket1'),
          tabBarActiveBackgroundColor: '#45014A',
          tabBarActiveTintColor: 'purple',
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon('Trophy') }}
        name="Trophy"
        component={generateScreen('Trophy')}
      />
      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon('wallet') }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Layout;
