import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fvkbzmenfqvbbhcxsjaw.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2a2J6bWVuZnF2YmJoY3hzamF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNzUwNTMsImV4cCI6MjA1MTg1MTA1M30.HHtu6HLhBOKh0mrhFU-iJoAbFWSiM0hmjuEXhHX3VKA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
