
import { Dream } from "@/lib/types";
import { DreamCard } from "./DreamCard";
import { EmptyState } from "./EmptyState";

interface DreamListProps {
  dreams: Dream[];
  isSearchResults?: boolean;
}

export const DreamList = ({ dreams, isSearchResults = false }: DreamListProps) => {
  if (dreams.length === 0) {
    return <EmptyState isSearchResults={isSearchResults} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
      {dreams.map((dream) => (
        <DreamCard key={dream.id} dream={dream} />
      ))}
    </div>
  );
};
