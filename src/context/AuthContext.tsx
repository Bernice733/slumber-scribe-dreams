
import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';
import { toast } from 'sonner';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    console.log("AuthProvider initializing...");
    let retryCount = 0;
    const maxRetries = 3;
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log("Auth state changed:", event, newSession?.user?.id);
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setIsLoading(false);
        setAuthInitialized(true);
      }
    );

    // THEN check for existing session with retry logic
    const initSession = async () => {
      try {
        console.log("Checking for existing session...");
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        console.log("Session check result:", currentSession?.user?.id || "No session");
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setAuthInitialized(true);
      } catch (error) {
        console.error('Error getting session:', error);
        
        // Retry logic for mobile apps
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying session check (${retryCount}/${maxRetries})...`);
          setTimeout(initSession, 1000); // Wait 1 second before retrying
          return;
        }
        
        toast.error('Failed to connect to authentication service.');
      } finally {
        setIsLoading(false);
      }
    };

    initSession();

    return () => {
      console.log("Unsubscribing from auth state changes");
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out. Please try again later.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
