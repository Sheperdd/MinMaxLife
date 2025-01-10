import '../../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

import AuthProvider from '~/providers/AuthProvider';

export default function Layout() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
