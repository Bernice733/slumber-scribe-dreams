
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dream, DreamMood, DREAM_MOODS } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Moon, Tag, X, Star, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent } from "./ui/card";

interface DreamFormProps {
  onSaveDream: (dream: Omit<Dream, "id">) => void;
}

const getMoodIcon = (mood: DreamMood) => {
  switch (mood) {
    case "happy":
      return <Sparkles className="h-4 w-4 text-yellow-400" />;
    case "peaceful":
      return <Moon className="h-4 w-4 text-blue-400" />;
    case "excited":
      return <Star className="h-4 w-4 text-purple-400" />;
    default:
      return null;
  }
};

const getMoodColor = (mood: DreamMood): string => {
  switch (mood) {
    case "happy":
      return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300";
    case "sad":
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
    case "scared":
      return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300";
    case "confused":
      return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300";
    case "peaceful":
      return "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300";
    case "excited":
      return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300";
    default:
      return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
  }
};

export const DreamForm = ({ onSaveDream }: DreamFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [mood, setMood] = useState<DreamMood>("neutral");
  const [isLucid, setIsLucid] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    onSaveDream({
      title: title.trim(),
      description: description.trim(),
      date: date.toISOString(),
      mood,
      tags,
      isLucid
    });

    navigate("/");
  };

  return (
    <Card className="border border-dream-muted/50 shadow-sm bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">Dream Title</Label>
            <Input
              id="title"
              placeholder="Enter a title for your dream"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-dream-muted/50 focus-visible:ring-dream-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">Dream Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-dream-muted/50"
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-dream-primary" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  initialFocus
                  className="rounded-md border border-dream-muted/50"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mood" className="text-sm font-medium">How did you feel in this dream?</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {DREAM_MOODS.map((dreamMood) => (
                <Button
                  key={dreamMood.value}
                  type="button"
                  variant={mood === dreamMood.value ? "default" : "outline"}
                  className={cn(
                    "h-9 transition-all",
                    mood === dreamMood.value 
                      ? "bg-dream-primary border-dream-primary text-white" 
                      : "border-dream-muted/50 hover:bg-dream-muted/20"
                  )}
                  onClick={() => setMood(dreamMood.value)}
                >
                  {getMoodIcon(dreamMood.value)}
                  <span>{dreamMood.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="tags" className="text-sm font-medium flex items-center">
                <Tag className="h-4 w-4 mr-1 text-dream-primary" />
                Tags
              </Label>
              <Button 
                type="button" 
                size="sm" 
                variant="ghost" 
                onClick={handleAddTag} 
                disabled={!tagInput.trim()}
                className="text-dream-primary hover:text-dream-primary/80 hover:bg-dream-muted/20"
              >
                Add
              </Button>
            </div>
            <div className="flex gap-2">
              <Input
                id="tags"
                placeholder="Enter tags (e.g., flying, water, family)"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                className="border-dream-muted/50 focus-visible:ring-dream-primary"
              />
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 transition-all">
                {tags.map((tag) => (
                  <div key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-dream-muted text-dream-tertiary text-xs font-medium transition-all hover:bg-dream-muted/80">
                    {tag}
                    <X
                      className="h-3 w-3 cursor-pointer hover:text-dream-primary"
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 p-3 rounded-md bg-dream-muted/30 border border-dream-muted/50">
            <Switch
              id="lucid"
              checked={isLucid}
              onCheckedChange={setIsLucid}
              className="data-[state=checked]:bg-dream-primary"
            />
            <Label htmlFor="lucid" className="text-sm cursor-pointer">This was a lucid dream</Label>
            {isLucid && <div className="ml-2 text-xs text-dream-primary">(you were aware you were dreaming)</div>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">Dream Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your dream in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[150px] border-dream-muted/50 focus-visible:ring-dream-primary"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
              className="border-dream-muted/50 hover:bg-dream-muted/20"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-dream-primary hover:bg-dream-primary/90"
            >
              Save Dream
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
