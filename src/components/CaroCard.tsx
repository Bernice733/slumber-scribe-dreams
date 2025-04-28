
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { RotateCw, Star, Moon, Sun, Wand } from "lucide-react";

export interface CaroCardProps {
  name: string;
  meaning: string;
  icon: 'crystal-ball' | 'star' | 'moon' | 'sun' | 'wand';
  reversed?: boolean;
}

export const CaroCard = ({ name, meaning, icon, reversed = false }: CaroCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'crystal-ball':
        return <RotateCw className="h-8 w-8" />; // Using RotateCw as a replacement for CrystalBall
      case 'star':
        return <Star className="h-8 w-8" />;
      case 'moon':
        return <Moon className="h-8 w-8" />;
      case 'sun':
        return <Sun className="h-8 w-8" />;
      case 'wand':
        return <Wand className="h-8 w-8" />;
    }
  };

  return (
    <Card className={`relative w-64 h-96 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/20 border-2 border-purple-200/50 dark:border-purple-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 ${reversed ? 'rotate-180' : ''}`}>
      <CardContent className="flex flex-col items-center justify-between h-full p-6 text-center">
        <div className={`w-12 h-12 rounded-full bg-dream-primary/10 flex items-center justify-center mb-4 ${reversed ? 'rotate-180' : ''}`}>
          {getIcon()}
        </div>
        <div className={reversed ? 'rotate-180' : ''}>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-dream-primary to-dream-tertiary bg-clip-text text-transparent mb-4">{name}</h3>
          <p className="text-sm text-muted-foreground">{meaning}</p>
        </div>
        <div className={`text-xs text-muted-foreground mt-4 ${reversed ? 'rotate-180' : ''}`}>
          {reversed ? 'Reversed' : 'Upright'}
        </div>
      </CardContent>
    </Card>
  );
};
