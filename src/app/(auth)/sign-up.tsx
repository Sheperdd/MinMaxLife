import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Pressable, Keyboard, Alert } from 'react-native';

import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/store';
import { Button } from '~/components/Button';

export default function SignUp() {
  const { email, setEmail, password, setPassword, loading, setLoading, setUserId } = useAuthStore();

  async function signInWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      setUserId(data?.user?.id || null);
    }
    setLoading(false);
  }

  return (
    <Pressable className="flex-1" onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 justify-center p-5">
        <Stack.Screen options={{ title: 'Sign Up' }} />

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
          title={loading ? 'Creating account...' : 'Create account'}
        />
        <Link replace href="/sign-in" className="mt-4 text-center font-bold text-blue-500">
          Sign in
        </Link>
      </View>
    </Pressable>
  );
}
