
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

export const DreamHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center mb-3">
        <Moon className="h-8 w-8 text-dream-primary mr-2 fill-dream-muted stroke-dream-primary" />
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-dream-primary to-dream-tertiary bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
