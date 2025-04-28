
import { Dream } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard = ({ dream }: DreamCardProps) => {
  return (
    <Link to={`/dream/${dream.id}`}>
      <Card className="overflow-hidden dream-card-hover bg-card/60 backdrop-blur-sm border-dream-muted">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium truncate">{dream.title}</h3>
            <div className="flex items-center text-muted-foreground text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              {format(new Date(dream.date), "MMM d, yyyy")}
            </div>
          </div>
          <div className="flex flex-wrap mt-1">
            {dream.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="dream-tag">
                {tag}
              </span>
            ))}
            {dream.tags.length > 3 && (
              <span className="dream-tag">+{dream.tags.length - 3}</span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {dream.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-dream-secondary font-medium">
              Mood: {dream.mood.charAt(0).toUpperCase() + dream.mood.slice(1)}
            </span>
            {dream.isLucid && (
              <span className="text-xs px-2 py-1 rounded-full bg-dream-primary/20 text-dream-primary">
                Lucid Dream
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
