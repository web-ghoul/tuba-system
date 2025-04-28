export const mfConfig = (
  tuba_system: string,
  portals: string,
  provider: string,
  reviewer: string,
  underwriter: string
) => ({
  name: "company",
  filename: "remoteEntry.js",
  remotes: {
    tuba_system,
    portals,
    provider,
    reviewer,
    underwriter,
  },
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true, eager: true,  requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, eager: true,  requiredVersion: "^19.0.0" },
    "react-i18next": { singleton: true, requiredVersion: undefined },
    "react-hot-toast": { singleton: true, requiredVersion: "^2.5.2" },
    i18next: { singleton: true, requiredVersion: undefined },
  },
});
