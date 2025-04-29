
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application starting...");

// Wait for device ready when in Capacitor environment
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM content loaded");
  
  // Enable smooth scrolling for iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  
  if (isIOS) {
    console.log("iOS device detected, applying iOS-specific settings");
    // Add iOS-specific classes to body
    document.body.classList.add('ios-device');
    
    // Set viewport height to handle iOS address bar
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Initial call and add event listener
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    // Apply WebkitOverflowScrolling to body
    document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
    
    // Prevent scroll blocking
    document.addEventListener('touchmove', function(event) {
      if ((event.target as HTMLElement).closest('.scroll-container, .ios-scroll-container')) {
        // Allow default scroll behavior
        return true;
      }
    }, { passive: true });
  }

  // Create and render the app root
  const rootElement = document.getElementById("root");
  if (rootElement) {
    console.log("Rendering app to root element");
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
});
