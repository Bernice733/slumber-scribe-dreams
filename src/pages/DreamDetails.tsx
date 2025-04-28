
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dream } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Trash2, Edit, Moon, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { CornerDecoration, FloatingStars } from "@/components/illustrations/DreamIllustrations";

const DreamDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [dream, setDream] = useState<Dream | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDream = () => {
      try {
        const savedDreams = JSON.parse(localStorage.getItem("dreams") || "[]");
        const foundDream = savedDreams.find((d: Dream) => d.id === id);
        
        if (foundDream) {
          setDream(foundDream);
        } else {
          toast({
            variant: "destructive",
            title: "Not found",
            description: "The requested dream entry could not be found.",
          });
          navigate("/");
        }
      } catch (error) {
        console.error("Failed to load dream:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load dream details.",
        });
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    loadDream();
  }, [id, navigate, toast]);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this dream?")) {
      try {
        const savedDreams = JSON.parse(localStorage.getItem("dreams") || "[]");
        const updatedDreams = savedDreams.filter((d: Dream) => d.id !== id);
        localStorage.setItem("dreams", JSON.stringify(updatedDreams));
        
        toast({
          title: "Dream deleted",
          description: "The dream has been deleted successfully.",
        });
        navigate("/");
      } catch (error) {
        console.error("Failed to delete dream:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to delete the dream. Please try again.",
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-8 flex justify-center">
        <div className="animate-pulse text-center">
          <p className="text-muted-foreground">Loading dream details...</p>
        </div>
      </div>
    );
  }

  if (!dream) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Dream not found</p>
          <Button variant="link" onClick={() => navigate("/")}>
            Go back to journal
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 animate-fade-in relative">
      <FloatingStars className="top-10 right-10" />
      
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")} 
        className="mb-6 hover:bg-dream-muted/30"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Journal
      </Button>

      <Card className="bg-card/80 backdrop-blur-sm border-dream-muted/50 shadow-md overflow-hidden relative">
        <CornerDecoration position="top-left" className="opacity-50" />
        <CornerDecoration position="top-right" className="opacity-50" />
        <CornerDecoration position="bottom-left" className="opacity-50" />
        <CornerDecoration position="bottom-right" className="opacity-50" />
        
        {dream.isLucid && (
          <div className="bg-dream-primary/20 py-2 px-4 text-center text-sm font-medium flex items-center justify-center border-b border-dream-primary/30">
            <Star className="h-4 w-4 text-dream-primary mr-1.5" />
            Lucid Dream
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-dream-primary to-dream-tertiary bg-clip-text text-transparent">
              {dream.title}
            </h1>
            <div className="flex items-center text-muted-foreground bg-dream-muted/30 px-3 py-1 rounded-full text-sm">
              <Calendar className="h-4 w-4 mr-1.5 text-dream-primary" />
              {format(new Date(dream.date), "MMMM d, yyyy")}
            </div>
          </div>

          <div className="flex flex-wrap my-5">
            {dream.tags.map((tag) => (
              <span key={tag} className="dream-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-dream-secondary/20 text-dream-secondary text-sm flex items-center">
              <Moon className="h-3.5 w-3.5 mr-1.5" />
              Mood: {dream.mood.charAt(0).toUpperCase() + dream.mood.slice(1)}
            </span>
          </div>

          <div className="border-t border-dream-muted/30 pt-5">
            <p className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
              {dream.description}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline" className="text-destructive border-destructive/30 hover:bg-destructive/10" onClick={handleDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DreamDetails;
