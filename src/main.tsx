
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for device ready when in Capacitor environment
document.addEventListener('DOMContentLoaded', () => {
  // Create and render the app root
  createRoot(document.getElementById("root")!).render(<App />);
});
