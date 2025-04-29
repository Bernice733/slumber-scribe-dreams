
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for device ready when in Capacitor environment
document.addEventListener('DOMContentLoaded', () => {
  // Create and render the app root
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
});
