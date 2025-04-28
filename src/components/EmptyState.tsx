
import { Button } from "@/components/ui/button";
import { Moon, Book, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface EmptyStateProps {
  isSearchResults?: boolean;
}

export const EmptyState = ({ isSearchResults = false }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-dream-muted p-5 rounded-full mb-4">
        {isSearchResults ? (
          <Book className="h-10 w-10 text-dream-primary" />
        ) : (
          <Moon className="h-10 w-10 text-dream-primary" />
        )}
      </div>
      <h2 className="text-xl font-semibold mt-2 mb-1">
        {isSearchResults ? "No dreams found" : "No dreams recorded yet"}
      </h2>
      <p className="text-muted-foreground max-w-md mb-6">
        {isSearchResults
          ? "Try adjusting your search or filters to find what you're looking for."
          : "Start capturing your dreams to uncover patterns and insights from your subconscious mind."}
      </p>
      {!isSearchResults && (
        <Button asChild>
          <Link to="/new">
            <Plus className="h-4 w-4 mr-2" />
            Record New Dream
          </Link>
        </Button>
      )}
    </div>
  );
};
