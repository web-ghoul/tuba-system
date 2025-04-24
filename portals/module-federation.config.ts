export const mfConfig = (tuba_system: string) => ({
  name: "portals",
  filename: "remoteEntry.js",
  remotes: {
    tuba_system,
  },
  exposes: {
    "./App": "./src/App",
  },
  shared: ["react", "react-dom"],
});
