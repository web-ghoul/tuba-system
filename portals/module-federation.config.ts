export const mfConfig = {
  name: "portals",
  filename: "remoteEntry.js",
  remotes:{
    tuba_system: `${process.env.REACT_APP_TUBA_SYSTEM_REMOTE}`,
  },
  exposes: {
    "./App": "./src/App", 
  },
  shared: ["react", "react-dom"],
};