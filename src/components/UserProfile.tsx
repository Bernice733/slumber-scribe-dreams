
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const UserProfile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      navigate("/login");
      toast.success("Signed out successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign out");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  const userInitial = user.email ? user.email[0].toUpperCase() : "U";
  const userEmail = user.email || "User";
  
  // Detect if we're on iOS for specific styling
  const isIOS = typeof window !== 'undefined' && 
    /iPad|iPhone|iPod/.test(navigator.userAgent) && 
    !(window as any).MSStream;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`relative h-10 w-10 rounded-full ${isIOS ? 'ios-touch-target' : ''}`}
          aria-label="User profile"
        >
          <Avatar className="h-10 w-10 border border-dream-primary/20">
            <AvatarFallback className="bg-dream-primary/10 text-dream-primary">
              {userInitial}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium text-sm">{userEmail}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => navigate("/settings")}
          className="cursor-pointer"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={handleSignOut}
          disabled={isLoading}
          className="text-red-600 cursor-pointer focus:text-red-700"
        >
          <LogOut className="w-4 h-4 mr-2" />
          {isLoading ? "Signing out..." : "Sign Out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
