
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ScrollableContainerProps {
  children: ReactNode;
  className?: string;
  maxHeight?: string;
  fullHeight?: boolean;
}

export const ScrollableContainer = ({
  children,
  className = "",
  maxHeight = "100%",
  fullHeight = false
}: ScrollableContainerProps) => {
  return (
    <div 
      className={`ios-scroll-container ${fullHeight ? 'h-full' : ''} ${className}`} 
      style={{ maxHeight }}
    >
      <ScrollArea className="h-full w-full overflow-y-auto">
        <div className="pb-safe">
          {children}
        </div>
      </ScrollArea>
    </div>
  );
};
