
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f55c7e6afaaa4ec18645c41c1ff9381d',
  appName: 'slumber-scribe-dreams',
  webDir: 'dist',
  server: {
    url: 'https://f55c7e6a-faaa-4ec1-8645-c41c1ff9381d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false,
  ios: {
    // Adding iOS-specific configuration
    limitsNavigationsToAppBoundDomains: true,
    contentInset: 'automatic',
    allowsLinkPreview: true,
    scrollEnabled: true,
    preferredContentMode: 'mobile',
    // Adding more iOS settings for better compatibility
    backgroundColor: "#ffffff",
    allowsBackForwardNavigationGestures: true,
    overrideUserAgent: null,
    appendUserAgent: "slumber-scribe-dreams-ios",
    webviewPrefersPlainText: false
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      showSpinner: true,
      androidSpinnerStyle: "large",
      spinnerColor: "#9b87f5", // Using dream-primary color
      splashFullScreen: true,
      splashImmersive: true,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash", // For Android
      iosSpinnerStyle: "large", // For iOS
      layoutName: "launch_screen" // For iOS
    }
  }
};

export default config;
