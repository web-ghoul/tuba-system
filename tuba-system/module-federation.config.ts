export const mfConfig = {
  name: "tuba_system",
  filename: "remoteEntry.js",
  remotes: {
    portals: `portals@http://localhost:4001/remoteEntry.js`,
  },
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./PrimaryButton": "./src/components/PrimaryButton.tsx",
    "./useCookie": "./src/hooks/useCookie.ts",
    "./styles": "./src/styles.ts",
    "./config": "./src/config.ts",
  },
  shared: ["react", "react-dom"],
};
