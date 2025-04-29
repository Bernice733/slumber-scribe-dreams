
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
    preferredContentMode: 'mobile'
  }
};

export default config;
