
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    console.log("ProtectedRoute auth state:", { user: !!user, isLoading, path: location.pathname });
    
    // Give a small delay to ensure auth context has time to initialize properly
    // This helps with mobile deep linking scenarios
    const timer = setTimeout(() => {
      setIsChecking(false);
      
      // If we've finished checking and still don't have a user, show a toast
      if (!user && !isLoading) {
        console.log("Authentication required, redirecting to login");
        toast.error("Please log in to continue");
      }
    }, 1000); // Increased timeout for mobile
    
    return () => clearTimeout(timer);
  }, [user, isLoading, location]);
  
  // If still performing initial auth check or our additional delay check
  if (isLoading || isChecking) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dream-primary"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    console.log("User not authenticated, redirecting to login");
    // Save the current location to redirect back after login
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If authenticated, show the protected content
  console.log("User authenticated, showing content");
  return <>{children}</>;
};
