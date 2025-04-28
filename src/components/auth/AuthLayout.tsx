
import React from "react";
import { DreamyBackground } from "@/components/DreamyBackground";
import { MoonIllustration, CloudsIllustration, FloatingStars } from "@/components/illustrations/DreamIllustrations";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DreamyBackground>
      <div className="container flex items-center justify-center min-h-screen py-8">
        <div className="w-full max-w-md relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-40">
            <MoonIllustration className="h-32 w-32" />
          </div>
          <div className="absolute top-1/2 -left-24 hidden md:block opacity-25">
            <CloudsIllustration className="h-24 w-24" />
          </div>
          <FloatingStars className="absolute -bottom-12 -right-12" />
          
          {/* Card content */}
          <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-purple-100 dark:border-purple-900/30 p-8 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70">
            {children}
          </div>
        </div>
      </div>
    </DreamyBackground>
  );
};
