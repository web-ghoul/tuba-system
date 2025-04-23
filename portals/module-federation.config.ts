export const mfConfig = {
  name: "portals",
  filename: "remoteEntry.js",
  remotes:{
    tuba_system: "tuba_system@http://localhost:4000/remoteEntry.js",
  },
  exposes: {
    "./App": "./src/App", 
  },
  shared: ["react", "react-dom"],
};