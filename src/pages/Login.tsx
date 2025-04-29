
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    console.log("Login page mounted, checking auth state");
    
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log("Auth check result:", user ? "User logged in" : "No user");
        if (user) {
          const from = location.state?.from || "/";
          navigate(from);
        }
      } catch (error) {
        console.error("Error checking user:", error);
      }
    };
    
    // Handle potential deep link verification
    const queryParams = new URLSearchParams(location.search);
    const verificationSuccess = queryParams.get('verified') === 'true';
    
    if (verificationSuccess) {
      console.log("Email verification detected in URL");
      toast.success("Email verified successfully! Please log in.");
      
      // Clean up URL parameters without triggering navigation
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('verified');
      window.history.replaceState({}, document.title, currentUrl.toString());
    }
    
    checkUser();
  }, [navigate, location]);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
