
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dream } from "@/lib/types";
import { DreamList } from "@/components/DreamList";
import { SearchBar } from "@/components/SearchBar";
import { Plus, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";
import { DreamHeader } from "@/components/DreamHeader";
import { UserProfile } from "@/components/UserProfile";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // Load dreams from localStorage
    const loadDreams = () => {
      const savedDreams = localStorage.getItem("dreams");
      if (savedDreams) {
        setDreams(JSON.parse(savedDreams));
      }
      setIsLoading(false);
    };

    loadDreams();
  }, []);

  const filteredDreams = dreams.filter((dream) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      dream.title.toLowerCase().includes(searchLower) ||
      dream.description.toLowerCase().includes(searchLower) ||
      dream.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
      dream.mood.toLowerCase().includes(searchLower)
    );
  });

  // Sort dreams by date (most recent first)
  const sortedDreams = [...filteredDreams].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="container py-8 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center mb-6">
        <DreamHeader 
          title="Dream Journal" 
          subtitle="Record and explore your subconscious adventures" 
        />
        <UserProfile />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="w-full sm:w-2/3 md:w-1/2 mb-4 sm:mb-0">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex space-x-3">
          <Button 
            asChild 
            variant="outline"
            className="border-dream-primary text-dream-primary hover:bg-dream-primary/10"
          >
            <Link to="/divination">
              <RotateCw className="h-4 w-4 mr-2" />
              Card Divination
            </Link>
          </Button>
          <Button 
            asChild 
            className="bg-dream-primary hover:bg-dream-primary/90 transition-all"
          >
            <Link to="/new">
              <Plus className="h-4 w-4 mr-2" />
              New Dream
            </Link>
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-pulse text-center">
            <p className="text-muted-foreground">Loading dreams...</p>
          </div>
        </div>
      ) : (
        <DreamList 
          dreams={sortedDreams} 
          isSearchResults={searchTerm !== ""}
        />
      )}
    </div>
  );
};

export default Index;
