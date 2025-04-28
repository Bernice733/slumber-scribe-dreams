
import { supabase } from '@/integrations/supabase/client';

// Re-export the Supabase client from the integrations folder
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
