
import React from "react";

export const DreamyBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#13111C] dark:via-[#191627] dark:to-[#1E1A31]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
