
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dream } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Trash2, Edit } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="container max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")} 
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Journal
      </Button>

      <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border border-dream-muted">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">{dream.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {format(new Date(dream.date), "MMMM d, yyyy")}
          </div>
        </div>

        <div className="flex flex-wrap my-4">
          {dream.tags.map((tag) => (
            <span key={tag} className="dream-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-dream-secondary/20 text-dream-secondary text-sm">
            Mood: {dream.mood.charAt(0).toUpperCase() + dream.mood.slice(1)}
          </span>
          {dream.isLucid && (
            <span className="px-3 py-1 rounded-full bg-dream-primary/20 text-dream-primary text-sm">
              Lucid Dream
            </span>
          )}
        </div>

        <div className="border-t border-dream-muted pt-4">
          <p className="whitespace-pre-wrap text-muted-foreground">
            {dream.description}
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" className="text-destructive" onClick={handleDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
        {/* Edit functionality would be added in a future enhancement */}
      </div>
    </div>
  );
};

export default DreamDetails;
