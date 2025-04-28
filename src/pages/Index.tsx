
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dream } from "@/lib/types";
import { DreamList } from "@/components/DreamList";
import { SearchBar } from "@/components/SearchBar";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-dream-dark">Dream Journal</h1>
        <Button asChild className="mt-4 sm:mt-0">
          <Link to="/new">
            <Plus className="h-4 w-4 mr-2" />
            New Dream
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
