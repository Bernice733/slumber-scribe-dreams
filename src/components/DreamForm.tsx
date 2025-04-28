
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
import { Calendar as CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";

interface DreamFormProps {
  onSaveDream: (dream: Omit<Dream, "id">) => void;
}

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
      // Show an error toast or validation
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
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="title">Dream Title</Label>
        <Input
          id="title"
          placeholder="Enter a title for your dream"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Dream Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mood">Mood</Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {DREAM_MOODS.map((dreamMood) => (
            <Button
              key={dreamMood.value}
              type="button"
              variant={mood === dreamMood.value ? "default" : "outline"}
              className={cn(
                "h-9",
                mood === dreamMood.value ? "bg-dream-primary" : ""
              )}
              onClick={() => setMood(dreamMood.value)}
            >
              {dreamMood.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="tags">Tags</Label>
          <Button type="button" size="sm" variant="ghost" onClick={handleAddTag} disabled={!tagInput.trim()}>
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
          />
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <div key={tag} className="dream-tag flex items-center gap-1">
                {tag}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleRemoveTag(tag)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="lucid"
          checked={isLucid}
          onCheckedChange={setIsLucid}
        />
        <Label htmlFor="lucid">This was a lucid dream</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Dream Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your dream in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[150px]"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/")}
        >
          Cancel
        </Button>
        <Button type="submit">Save Dream</Button>
      </div>
    </form>
  );
};
