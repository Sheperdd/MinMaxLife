import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

import TabBarButton from './TabBarButton';

import { IconType } from '~/constants/icon';

//This component is a custom tab bar that animates the tab indicator when switching tabs.
export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // Dimensions of the tab bar
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

  // Width of each tab button
  const buttonWidth = dimensions.width / state.routes.length;

  // Callback for when the tab bar layout changes or because of different screen sizes
  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  // Shared value for the position of the tab indicator
  const tabPositionX = useSharedValue(0);

  // Animated style for the tab indicator makes it go to what tab selected
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View onLayout={onTabBarLayout} style={styles.tabBar}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor: '#723FEB',
            borderRadius: 30,
            marginHorizontal: 10,
            height: dimensions.height - 15,
            width: buttonWidth - 20,
          },
        ]}
      />
      {/* Map through the routes and create a tab button for each one each route from _layouts */}
      {state.routes.map((route, index) => {
        // Get the label of the tab button by checking the options of the route(look in _layouts)
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        //when the tab button is pressed, the tab indicator moves to the position of the button
        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 1000 });
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        //when the tab button is long pressed, the tab indicator moves to the position of the button
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            isFocused={isFocused}
            routeName={route.name as IconType}
            onPress={onPress}
            onLongPress={onLongPress}
            color={isFocused ? '#222' : '#222'}
            label={label}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
