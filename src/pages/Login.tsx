
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
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate("/");
      }
    };
    
    // Handle potential deep link verification
    const queryParams = new URLSearchParams(location.search);
    const verificationSuccess = queryParams.get('verified') === 'true';
    
    if (verificationSuccess) {
      toast.success("Email verified successfully! Please log in.");
      window.history.replaceState({}, document.title, window.location.pathname);
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
