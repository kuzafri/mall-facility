import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Odyssey",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      androidScaleType: "CENTER_CROP",
      launchShowDuration: 5000,
    },
  },
};

export default config;
