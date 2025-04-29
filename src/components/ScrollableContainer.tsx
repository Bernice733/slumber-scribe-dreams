
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ScrollableContainerProps {
  children: ReactNode;
  className?: string;
  maxHeight?: string;
}

export const ScrollableContainer = ({
  children,
  className = "",
  maxHeight = "100%"
}: ScrollableContainerProps) => {
  return (
    <div className={`ios-scroll-container ${className}`} style={{ maxHeight }}>
      <ScrollArea className="h-full w-full">
        {children}
      </ScrollArea>
    </div>
  );
};
