
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewDream from "./pages/NewDream";
import DreamDetails from "./pages/DreamDetails";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import { DreamyBackground } from "./components/DreamyBackground";
import CardDivination from "./pages/CardDivination";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Handle mobile app specific setup
  useEffect(() => {
    // Set viewport height for mobile devices to handle iOS safari address bar
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DreamyBackground>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected Routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/new" element={
                <ProtectedRoute>
                  <NewDream />
                </ProtectedRoute>
              } />
              <Route path="/dream/:id" element={
                <ProtectedRoute>
                  <DreamDetails />
                </ProtectedRoute>
              } />
              <Route path="/divination" element={
                <ProtectedRoute>
                  <CardDivination />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DreamyBackground>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
