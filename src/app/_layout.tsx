import '../../global.css';

import { Stack } from 'expo-router';

import AuthProvider from '~/providers/AuthProvider';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
