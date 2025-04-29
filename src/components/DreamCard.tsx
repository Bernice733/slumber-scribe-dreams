import { Dream } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Moon, Star } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard = ({ dream }: DreamCardProps) => {
  return (
    <Link to={`/dream/${dream.id}`} className="block h-full">
      <Card className="overflow-hidden dream-card-hover h-full bg-card/80 backdrop-blur-sm border-dream-muted/50 transition-all hover:shadow-md">
        {dream.isLucid && (
          <div className="bg-dream-primary/20 py-1 px-3 text-xs font-medium text-dream-primary flex items-center justify-center border-b border-dream-primary/30">
            <Star className="h-3 w-3 mr-1" />
            Lucid Dream
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium truncate text-foreground">
              {dream.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-xs">
              <Calendar className="h-3 w-3 mr-1 text-dream-primary" />
              {format(new Date(dream.date), "MMM d, yyyy")}
            </div>
          </div>
          <div className="flex flex-wrap mt-1.5 gap-1">
            {dream.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-dream-muted text-dream-tertiary"
              >
                {tag}
              </span>
            ))}
            {dream.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-dream-muted/70 text-dream-tertiary">
                +{dream.tags.length - 3}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {dream.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs flex items-center px-2 py-1 rounded-full bg-dream-muted/50 text-dream-secondary">
              <Moon className="h-3 w-3 mr-1" />
              {dream.mood.charAt(0).toUpperCase() + dream.mood.slice(1)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
