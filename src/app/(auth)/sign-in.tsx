import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Pressable, Keyboard, Alert } from 'react-native';

import CheckAndInitializeStats from './initializeStats';

import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/store';
import { fetchStats } from '~/api/stats';
import { Button } from '~/components/Button';
import { useStatsStore } from '~/store/statsStore';

export default function SignIn() {
  const { email, setEmail, password, setPassword, loading, setLoading } = useAuthStore();
  const { setStats } = useStatsStore();

  async function signInWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      const userId = data?.user?.id;
      if (userId) {
        await CheckAndInitializeStats(userId); // Initialize stats after successful login

        const stats = await fetchStats(userId);
        if (stats) {
          setStats(stats);
        }
      }
    }
    setLoading(false);
  }

  return (
    <Pressable className="flex-1" onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 justify-center p-5">
        <Stack.Screen options={{ title: 'Sign In' }} />

        <Text className="text-lg text-gray-500">Email</Text>
        <TextInput
          className="mb-5 mt-1 rounded border border-gray-300 bg-white p-2"
          placeholder="jondoe@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text className="text-lg text-gray-500">Password</Text>
        <TextInput
          className="mb-5 mt-1 rounded border border-gray-300 bg-white p-2"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder=""
        />

        <Button
          onPress={signInWithEmail}
          disabled={loading}
          title={loading ? 'Signing In...' : 'Sign In'}
        />
        <Link replace href="/sign-up" className="mt-4 text-center font-bold text-blue-500">
          Create an account
        </Link>
      </View>
    </Pressable>
  );
}
