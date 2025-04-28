
import { Button } from "@/components/ui/button";
import { Moon, Book, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { MoonIllustration, FloatingStars } from "./illustrations/DreamIllustrations";

interface EmptyStateProps {
  isSearchResults?: boolean;
}

export const EmptyState = ({ isSearchResults = false }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center relative overflow-hidden">
      <FloatingStars className="top-0 left-0 w-full h-full" />
      
      <div className="bg-dream-muted p-5 rounded-full mb-4 relative">
        {isSearchResults ? (
          <Book className="h-10 w-10 text-dream-primary" />
        ) : (
          <>
            <Moon className="h-10 w-10 text-dream-primary" />
            <div className="absolute -top-10 -right-10 opacity-30 animate-pulse">
              <MoonIllustration className="h-24 w-24" />
            </div>
          </>
        )}
      </div>
      
      <h2 className="text-xl font-semibold mt-2 mb-1 relative z-10">
        {isSearchResults ? "No dreams found" : "No dreams recorded yet"}
      </h2>
      <p className="text-muted-foreground max-w-md mb-6 relative z-10">
        {isSearchResults
          ? "Try adjusting your search or filters to find what you're looking for."
          : "Start capturing your dreams to uncover patterns and insights from your subconscious mind."}
      </p>
      {!isSearchResults && (
        <Button asChild className="relative z-10">
          <Link to="/new">
            <Plus className="h-4 w-4 mr-2" />
            Record New Dream
          </Link>
        </Button>
      )}
    </div>
  );
};
