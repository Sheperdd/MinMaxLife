import { Redirect } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';

import { supabase } from '@/lib/supabase';
import { Button } from '~/components/Button';
import { useAuth } from '~/providers/AuthProvider';
import { useAuthStore } from '~/store/store';

const SettingScreen = () => {
  const { session, loading } = useAuth();
  const { userId } = useAuthStore();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <View>
      <Text>Profile</Text>
      <Text>Email: {session.user.email}</Text>
      <Text>UserId: {userId}</Text>
      <Button title="Sign out" onPress={async () => await supabase.auth.signOut()} />
    </View>
  );
};

export default SettingScreen;
