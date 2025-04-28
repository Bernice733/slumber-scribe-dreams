
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewDream from "./pages/NewDream";
import DreamDetails from "./pages/DreamDetails";
import NotFound from "./pages/NotFound";
import { DreamyBackground } from "./components/DreamyBackground";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DreamyBackground>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/new" element={<NewDream />} />
            <Route path="/dream/:id" element={<DreamDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DreamyBackground>
    </QueryClientProvider>
  );
};

export default App;
