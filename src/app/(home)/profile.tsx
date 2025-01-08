import { Redirect } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';

import { supabase } from '@/lib/supabase';
import { Button } from '~/components/Button';
import { useAuth } from '~/providers/AuthProvider';

const ProfileScreen = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <View>
      <Text>Profile</Text>

      <Button title="Sign out" onPress={async () => await supabase.auth.signOut()} />
    </View>
  );
};

export default ProfileScreen;
