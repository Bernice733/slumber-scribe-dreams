
import { createClient } from '@supabase/supabase-js';

// Get environment variables or use placeholder values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a client only if we have the required values
let supabase: ReturnType<typeof createClient>;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  
  // Create a mock client for development to prevent app crashes
  // This won't make actual API calls but allows the app to initialize
  supabase = {
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithPassword: async () => ({ data: null, error: new Error('Supabase not configured') }),
      signUp: async () => ({ data: null, error: new Error('Supabase not configured') }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
  } as any;
} else {
  // Create the actual Supabase client
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// Auth helper functions
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const getUserId = async () => {
  const user = await getCurrentUser();
  return user?.id;
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};
