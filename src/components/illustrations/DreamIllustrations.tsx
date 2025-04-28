
import React from "react";

export const FloatingStars = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="20" r="2" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "0s"}} />
      <circle cx="60" cy="40" r="3" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "0.3s"}} />
      <circle cx="120" cy="30" r="2" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "0.7s"}} />
      <circle cx="180" cy="15" r="2" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "1.2s"}} />
      <circle cx="210" cy="50" r="3" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "0.5s"}} />
      <circle cx="20" cy="70" r="2" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "0.9s"}} />
      <circle cx="90" cy="90" r="2" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "1.5s"}} />
      <circle cx="160" cy="80" r="3" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "0.2s"}} />
      <circle cx="220" cy="100" r="2" fill="#9b87f5" className="animate-pulse" style={{animationDelay: "1.0s"}} />
    </svg>
  </div>
);

export const MoonIllustration = ({ className = "" }: { className?: string }) => (
  <div className={`${className}`}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#E5DEFF" />
      <path d="M50 10C28.9543 10 12 26.9543 12 48C12 69.0457 28.9543 86 50 86C71.0457 86 88 69.0457 88 48C88 26.9543 71.0457 10 50 10ZM50 80C32.3269 80 18 65.6731 18 48C18 30.3269 32.3269 16 50 16C50 42 68 50 82 48C80.1645 65.2741 66.5173 80 50 80Z" fill="#9b87f5" fillOpacity="0.4" />
      <circle cx="30" cy="35" r="5" fill="#D6BCFA" fillOpacity="0.7" />
      <circle cx="60" cy="40" r="7" fill="#D6BCFA" fillOpacity="0.5" />
      <circle cx="45" cy="60" r="4" fill="#D6BCFA" fillOpacity="0.6" />
    </svg>
  </div>
);

export const CloudsIllustration = ({ className = "" }: { className?: string }) => (
  <div className={`${className}`}>
    <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 40C40 51.0457 31.0457 60 20 60C8.9543 60 0 51.0457 0 40C0 28.9543 8.9543 20 20 20C31.0457 20 40 28.9543 40 40Z" fill="#E5DEFF" fillOpacity="0.6" />
      <path d="M80 30C80 41.0457 71.0457 50 60 50C48.9543 50 40 41.0457 40 30C40 18.9543 48.9543 10 60 10C71.0457 10 80 18.9543 80 30Z" fill="#E5DEFF" fillOpacity="0.8" />
      <path d="M120 40C120 51.0457 111.046 60 100 60C88.9543 60 80 51.0457 80 40C80 28.9543 88.9543 20 100 20C111.046 20 120 28.9543 120 40Z" fill="#E5DEFF" fillOpacity="0.7" />
      <path d="M160 30C160 41.0457 151.046 50 140 50C128.954 50 120 41.0457 120 30C120 18.9543 128.954 10 140 10C151.046 10 160 18.9543 160 30Z" fill="#E5DEFF" fillOpacity="0.9" />
      <path d="M200 40C200 51.0457 191.046 60 180 60C168.954 60 160 51.0457 160 40C160 28.9543 168.954 20 180 20C191.046 20 200 28.9543 200 40Z" fill="#E5DEFF" fillOpacity="0.6" />
    </svg>
  </div>
);

export const DreamCatcher = ({ className = "" }: { className?: string }) => (
  <div className={`${className}`}>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="40" stroke="#9b87f5" strokeWidth="2" />
      <circle cx="60" cy="60" r="30" stroke="#9b87f5" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="60" cy="60" r="20" stroke="#9b87f5" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="60" cy="60" r="10" stroke="#9b87f5" strokeWidth="1" strokeDasharray="1 1" />
      <circle cx="60" cy="60" r="3" fill="#9b87f5" />
      <line x1="60" y1="20" x2="60" y2="10" stroke="#9b87f5" strokeWidth="2" />
      <line x1="60" y1="110" x2="60" y2="100" stroke="#9b87f5" strokeWidth="2" />
      <line x1="20" y1="60" x2="10" y2="60" stroke="#9b87f5" strokeWidth="2" />
      <line x1="110" y1="60" x2="100" y2="60" stroke="#9b87f5" strokeWidth="2" />
      <line x1="31.7157" y1="31.7157" x2="24.8528" y2="24.8528" stroke="#9b87f5" strokeWidth="2" />
      <line x1="95.1472" y1="95.1472" x2="88.2843" y2="88.2843" stroke="#9b87f5" strokeWidth="2" />
      <line x1="88.2843" y1="31.7157" x2="95.1472" y2="24.8528" stroke="#9b87f5" strokeWidth="2" />
      <line x1="24.8528" y1="95.1472" x2="31.7157" y2="88.2843" stroke="#9b87f5" strokeWidth="2" />
      <circle cx="60" cy="100" r="2" fill="#7E69AB" />
      <circle cx="45" cy="95" r="2" fill="#7E69AB" />
      <circle cx="75" cy="95" r="2" fill="#7E69AB" />
      <line x1="60" y1="98" x2="45" y2="93" stroke="#9b87f5" strokeWidth="1" />
      <line x1="60" y1="98" x2="75" y2="93" stroke="#9b87f5" strokeWidth="1" />
    </svg>
  </div>
);

export const TarotDecoration = ({ className = "" }: { className?: string }) => (
  <div className={`${className}`}>
    <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15C10 18.866 13.134 22 17 22C20.866 22 24 18.866 24 15C24 11.134 20.866 8 17 8C13.134 8 10 11.134 10 15Z" fill="#E5DEFF" fillOpacity="0.6" />
      <path d="M43 15C43 18.866 46.134 22 50 22C53.866 22 57 18.866 57 15C57 11.134 53.866 8 50 8C46.134 8 43 11.134 43 15Z" fill="#E5DEFF" fillOpacity="0.6" />
      <path d="M76 15C76 18.866 79.134 22 83 22C86.866 22 90 18.866 90 15C90 11.134 86.866 8 83 8C79.134 8 76 11.134 76 15Z" fill="#E5DEFF" fillOpacity="0.6" />
      <path d="M17 8L50 8L83 8" stroke="#9b87f5" strokeWidth="0.5" strokeDasharray="2 1" />
      <circle cx="17" cy="8" r="2" fill="#9b87f5" fillOpacity="0.4" />
      <circle cx="50" cy="8" r="2" fill="#9b87f5" fillOpacity="0.4" />
      <circle cx="83" cy="8" r="2" fill="#9b87f5" fillOpacity="0.4" />
      <path d="M17 22L50 22L83 22" stroke="#9b87f5" strokeWidth="0.5" strokeDasharray="2 1" />
      <circle cx="17" cy="22" r="2" fill="#9b87f5" fillOpacity="0.4" />
      <circle cx="50" cy="22" r="2" fill="#9b87f5" fillOpacity="0.4" />
      <circle cx="83" cy="22" r="2" fill="#9b87f5" fillOpacity="0.4" />
    </svg>
  </div>
);

export const CardSymbols = ({ type, className = "" }: { type: "star" | "moon" | "sun" | "wand" | "crystal-ball", className?: string }) => {
  switch (type) {
    case "star":
      return (
        <div className={`${className}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L23.5267 15.8733H34.1459L25.3096 22.7534L28.8363 33.6267L20 26.7466L11.1637 33.6267L14.6904 22.7534L5.85407 15.8733H16.4733L20 5Z" fill="#F2FCE2" fillOpacity="0.6" stroke="#9b87f5" strokeWidth="0.5" />
          </svg>
        </div>
      );
    case "moon":
      return (
        <div className={`${className}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C20 18 24 20 28 20Z" fill="#E5DEFF" fillOpacity="0.6" stroke="#9b87f5" strokeWidth="0.5" />
          </svg>
        </div>
      );
    case "sun":
      return (
        <div className={`${className}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="8" fill="#FEF7CD" fillOpacity="0.6" stroke="#9b87f5" strokeWidth="0.5" />
            <line x1="20" y1="8" x2="20" y2="12" stroke="#9b87f5" strokeWidth="1" />
            <line x1="20" y1="28" x2="20" y2="32" stroke="#9b87f5" strokeWidth="1" />
            <line x1="8" y1="20" x2="12" y2="20" stroke="#9b87f5" strokeWidth="1" />
            <line x1="28" y1="20" x2="32" y2="20" stroke="#9b87f5" strokeWidth="1" />
            <line x1="11.7574" y1="11.7574" x2="14.5858" y2="14.5858" stroke="#9b87f5" strokeWidth="1" />
            <line x1="25.4142" y1="25.4142" x2="28.2426" y2="28.2426" stroke="#9b87f5" strokeWidth="1" />
            <line x1="11.7574" y1="28.2426" x2="14.5858" y2="25.4142" stroke="#9b87f5" strokeWidth="1" />
            <line x1="25.4142" y1="14.5858" x2="28.2426" y2="11.7574" stroke="#9b87f5" strokeWidth="1" />
          </svg>
        </div>
      );
    case "wand":
      return (
        <div className={`${className}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="30" x2="30" y2="10" stroke="#9b87f5" strokeWidth="1" />
            <circle cx="30" cy="10" r="3" fill="#FFDEE2" fillOpacity="0.6" stroke="#9b87f5" strokeWidth="0.5" />
            <circle cx="25" cy="15" r="1" fill="#9b87f5" fillOpacity="0.3" />
            <circle cx="20" cy="20" r="1" fill="#9b87f5" fillOpacity="0.3" />
            <circle cx="15" cy="25" r="1" fill="#9b87f5" fillOpacity="0.3" />
          </svg>
        </div>
      );
    case "crystal-ball":
    default:
      return (
        <div className={`${className}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" fill="#D3E4FD" fillOpacity="0.6" stroke="#9b87f5" strokeWidth="0.5" />
            <path d="M15 19C15.5 16 18 14.5 20 16C22 17.5 24.5 16 25 19C25.5 22 23 24 20 24C17 24 14.5 22 15 19Z" fill="#9b87f5" fillOpacity="0.2" />
          </svg>
        </div>
      );
  }
};

export const CornerDecoration = ({ position = "top-left", className = "" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right", className?: string }) => {
  const rotate = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "rotate-270"
  };

  return (
    <div className={`absolute ${position.includes("top") ? "top-0" : "bottom-0"} ${position.includes("left") ? "left-0" : "right-0"} ${rotate[position]} ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0C0 33.1371 26.8629 60 60 60V50C32.3858 50 10 27.6142 10 0H0Z" fill="#9b87f5" fillOpacity="0.1" />
        <circle cx="20" cy="20" r="2" fill="#9b87f5" fillOpacity="0.4" />
        <circle cx="30" cy="30" r="1.5" fill="#9b87f5" fillOpacity="0.4" />
        <circle cx="40" cy="40" r="1" fill="#9b87f5" fillOpacity="0.4" />
      </svg>
    </div>
  );
};
