
import { useState } from "react";
import { DreamHeader } from "@/components/DreamHeader";
import { Button } from "@/components/ui/button";
import { CaroCard, CaroCardProps } from "@/components/CaroCard";
import { getRandomCards } from "@/lib/divination-data";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { FloatingStars, TarotDecoration, DreamCatcher, CloudsIllustration } from "@/components/illustrations/DreamIllustrations";

const CardDivination = () => {
  const [cards, setCards] = useState<CaroCardProps[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const { toast } = useToast();

  const drawCards = () => {
    setIsRevealed(false);
    const newCards = getRandomCards(3);
    setCards(newCards);
    toast({
      title: "Cards drawn",
      description: "Focus on your dream and reveal your cards",
    });
  };

  const revealCards = () => {
    setIsRevealed(true);
    toast({
      title: "Cards revealed",
      description: "Consider how these cards relate to your dreams",
    });
  };

  return (
    <div className="container py-8 max-w-7xl mx-auto px-4 sm:px-6 relative">
      <FloatingStars className="absolute top-10 right-10" />
      <FloatingStars className="absolute bottom-10 left-10" />
      
      <DreamHeader 
        title="Caro Card Divination" 
        subtitle="Explore the hidden meanings of your dreams through mystical cards" 
      />
      
      <div className="mb-6 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-50">
          <CloudsIllustration className="h-16" />
        </div>
        
        <div className="absolute top-0 left-0 opacity-30">
          <DreamCatcher className="h-16" />
        </div>
        
        <div className="absolute top-0 right-0 opacity-30">
          <DreamCatcher className="h-16" />
        </div>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 pt-12">
          Think about a recent dream you've had, or a question you want insights on. 
          Draw three cards and reflect on how their meanings connect to your dreams.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Button 
            onClick={drawCards}
            className="bg-dream-primary hover:bg-dream-primary/90 transition-all"
          >
            Draw New Cards
          </Button>
          
          {cards.length > 0 && !isRevealed && (
            <Button 
              onClick={revealCards}
              variant="outline"
              className="border-dream-primary text-dream-primary hover:bg-dream-primary/10"
            >
              Reveal Cards
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 scale-150">
          <DreamCatcher className="w-full h-full" />
        </div>
        
        <TarotDecoration className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl" />
        
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 ${isRevealed ? 'opacity-100 transform-none' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <CaroCard {...card} />
            </div>
          ))
        ) : (
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dream-muted flex items-center justify-center">
              <div className="text-2xl">🔮</div>
            </div>
            <p className="text-muted-foreground">
              Draw cards to reveal your divination
            </p>
          </div>
        )}
      </div>
      
      <div className="text-center">
        <Button asChild variant="ghost" className="text-muted-foreground">
          <Link to="/">Return to Dream Journal</Link>
        </Button>
      </div>
    </div>
  );
};

export default CardDivination;
