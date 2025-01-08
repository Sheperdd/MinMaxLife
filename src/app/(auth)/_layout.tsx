import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/providers/AuthProvider';

export default function AuthLayout() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href="/" />;
  }

  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ title: 'Sign In', headerTransparent: true }} />
      <Stack.Screen name="sign-up" options={{ title: 'Sign Up', headerTransparent: true }} />
    </Stack>
  );
}
