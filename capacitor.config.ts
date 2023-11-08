import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.foodrush',
  appName: 'foodrush',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
