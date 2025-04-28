
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dream } from "@/lib/types";
import { DreamForm } from "@/components/DreamForm";
import { useToast } from "@/components/ui/use-toast";
import { DreamHeader } from "@/components/DreamHeader";

const NewDream = () => {
  const { toast } = useToast();

  const handleSaveDream = (dreamData: Omit<Dream, "id">) => {
    const newDream: Dream = {
      id: uuidv4(),
      ...dreamData,
    };

    // Save to localStorage
    try {
      const existingDreams = JSON.parse(localStorage.getItem("dreams") || "[]");
      const updatedDreams = [...existingDreams, newDream];
      localStorage.setItem("dreams", JSON.stringify(updatedDreams));
      
      toast({
        title: "Dream saved",
        description: "Your dream has been recorded successfully.",
      });
    } catch (error) {
      console.error("Failed to save dream:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save your dream. Please try again.",
      });
    }
  };

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <DreamHeader 
        title="Record New Dream" 
        subtitle="Capture your dream journey and explore your subconscious mind" 
      />
      <DreamForm onSaveDream={handleSaveDream} />
    </div>
  );
};

export default NewDream;
