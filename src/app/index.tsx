import { Link, Redirect, Stack } from 'expo-router';
import { Text, View } from 'react-native';

import { useAuth } from '@/providers/AuthProvider';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function StartupMenu() {
  const { session } = useAuth();

  // Redirect to home if user is already logged in
  if (session) {
    return <Redirect href="/(home)" />;
  }

  return (
    <Container>
      <View className="mb-20 flex-1 justify-center p-5">
        <Stack.Screen options={{ headerShown: false }} />
        <Text className={styles.title}>Welcome to MinMaxLife!</Text>
        <Text className={styles.subtitle}>Please login or make an account!</Text>
        <Link href="/(auth)/sign-in" asChild className="mb-4">
          <Button title="Login" />
        </Link>
        <Link href="/(auth)/sign-up" asChild>
          <Button title="Make Account" />
        </Link>
      </View>
    </Container>
  );
}

const styles = {
  title: 'text-2xl font-bold text-center mt-4 mb-4',
  subtitle: 'text-lg text-center mb-6',
};
